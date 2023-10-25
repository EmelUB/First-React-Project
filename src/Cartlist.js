import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'

export default class cartList extends Component {
  renderCart(){
    return(
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Category ID</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Unit In Stock</th>
            <th>Quantity</th>
            
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map(cartItem=>(
            <tr>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button color='danger' onClick={()=>{this.props.removeFromCart(cartItem.product)}}> Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
  render() {
    return (
      <div>
        {this.renderCart()}
      </div>
    )
  }
}
