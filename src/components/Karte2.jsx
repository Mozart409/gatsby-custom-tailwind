import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Karte2 extends Component {
  render() {
    return (
        <div className="mx-auto mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-2xl">
          <div className="px-6 py-4">
            <h1 className="text-center mb-2">{this.props.title}</h1>
            <p className="text-gray-700 text-base">
              {this.props.children}
            </p>
          </div>
        </div>

    );
  }
}

Karte2.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Karte2
