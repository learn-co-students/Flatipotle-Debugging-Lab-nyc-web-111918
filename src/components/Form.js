import React, { Component } from 'react'
import ProteinForm from './ProteinForm'
import FillingForm from './FillingForm'
import ToppingForm from './ToppingForm'
import SideForm from './SideForm'

const DEFAULT_STATE = {
  protein: [],
  fillings: [],
  toppings: [],
  sides: []
}
class Form extends Component {
  state = {
    ...DEFAULT_STATE
  }

  handleSubmit = (event) => {
    // console.log('state', this.state, 'event:', event.target);
    event.preventDefault()
    // debugger
    document.getElementById("order-form").reset()
    this.props.addOrder(this.state)
    this.setState({
      ...DEFAULT_STATE
    }/*, () => console.log('form handleSubmit', this.state)*/)
  }

  handleChange = (event) => {
    // console.log('hello');
    // console.log(this.state);
    // this is changing the state in this class.
    const itemType = event.target.name
    const item = event.target.value
    // debugger
    !this.state[`${itemType}`].includes(item) ?
      this.setState({
        [itemType]: this.state[`${itemType}`].concat(item)
      }/*, () => console.log(this.state)*/)
    :
      this.setState({
        [itemType]: this.state[`${itemType}`].filter(
          ingr => ingr !== item
        )
      })
  }

// states are empty. setting state is not wroking?
  render() {
    // console.log(this.state);
    return(
      <div className="ui raised container segment">
        <h1 className="ui block header">Order Form</h1>
        <form className="ui form" id="order-form" onSubmit={this.handleSubmit}>
          <ProteinForm
            protein={ this.state.protein }
            handleChange={ this.handleChange }
          />

          <FillingForm
            fillings={ this.state.fillings }
            handleChange={ this.handleChange }
          />

          <ToppingForm
            toppings={ this.state.toppings }
            handleChange={ this.handleChange }
          />

          <SideForm
            sides={ this.state.sides }
            handleChange={ this.handleChange }
          />

          <br />

          <button className="ui blue big button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
