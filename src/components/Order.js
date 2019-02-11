import React, { Component } from 'react'
import Side from './Side'

class Order extends Component {
  state = {
    isClicked: false
  }

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    return (
      <div className="ui centered raised card">
        <div className="image">
          <img src={ require("../images/burrito-bowl.jpg") } alt="burrito bowl" />
        </div>
        <div className="content">
          <b>Protein:</b><br />
          { this.props.orders.protein ? this.props.orders.protein.join(", ") : "None" }
          <br />
          <b>Fillings:</b><br />
          { this.props.orders.fillings ? this.props.orders.fillings.join(", ") : "None" }
          <br />
          <b>Toppings:</b><br />
          { this.props.orders.toppings ? this.props.orders.toppings.join(", ") : "None" }
          <br />
        </div>
        <div className="extra content">
          { this.props.orders.sides ?
              <button className="ui button small" onClick={ this.handleClick }>
                View Sides
              </button>
            :
              <p>No sides</p>
          }

          { /* this is just a shortcut to writing this.state.isClicked ? <Side sides={this.props.orders.sides} /> : null */ }
          { this.state.isClicked && <Side sides={this.props.orders.sides} /> }

        </div>
      </div>
    )
  }
}

export default Order
