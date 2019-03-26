import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTest } from '../../actions'
import './style.css'

class Test extends Component {
  handlerClick = () => {
    this.props.addTest()
  }

  render () {
    let {data} =this.props.test
    return (
      <>
      <div onClick={this.handlerClick} className='main__test-buton'>
        TEST BUTTON
      </div>
      <div>
        {data&& data.map((item,index) => {
          return <div>{item.title}</div>
        })}
      </div>
      </>
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
