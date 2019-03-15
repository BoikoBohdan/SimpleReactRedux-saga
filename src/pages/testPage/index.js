import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTest } from '../../actions'
import './style.css'

class Test extends Component {
  handlerClick = () => {
    this.props.addTest('123123')
    console.log(this.props.test)
  }

  render () {
    return (
      <div onClick={this.handlerClick} className='main__test-buton'>
        TEST BUTTON
      </div>
    )
  }
}

let mapDispatchToProps = dispatch => {
  return {
    addTest: article => dispatch(addTest(article))
  }
}

let mapStateToProps = state => {
  return { test: state.test }
}

export const testPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)
