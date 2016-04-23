import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as actions from '../actions'
import styles from './Home.css'


function mapStateToProps(state) {
  return {
    enabled: state.enabler
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

class Home extends Component {
  render() {
    let child
    if (this.props.enabled) {
      child = <a onClick={this.props.disable}>Disable Airsonos</a>
    } else {
      child = <a onClick={this.props.enable}>Enable Airsonos</a>
    }

    return (
      <div>
        <div className={styles.container}>
          { child }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
