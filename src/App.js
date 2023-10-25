import Navi from "./Navi";
import Category from "./Category";
import Product from "./Product";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from 'react';
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import Cartlist from "./Cartlist";
import Notfound from "./Notfound";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";


export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] }

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    console.log(category);
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    console.log(newCart);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart", 2);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart", 2);
  };

  render() {
    let productInfo = { title: "Product List", baska: "bisey" };
    let categoryInfo = { title: "Category List" };

    return (
      <div>

        <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
        <Container>
          <Row>
            <Col xs="3">
              <Category currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Routes>
                <Route path="/" element={<Product addToCart={this.addToCart} products={this.state.products} currentCategory={this.state.currentCategory} info={productInfo} />} />
                <Route path="/cart" element={<Cartlist removeFromCart={this.removeFromCart} cart={this.state.cart} />} />
                <Route path="/form1" element={<FormDemo1 />}></Route>
                <Route path="/form2" element={<FormDemo2/>}></Route>
                <Route path="*" element={<Notfound />} />
              </Routes>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}
