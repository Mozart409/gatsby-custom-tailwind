import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Karte extends Component {
  render() {
    return (
        <div className="mx-1 flex-wrap mb-4 max-w-sm border border-gray-200 rounded-lg overflow-hidden shadow-2xl">
          <div className="py-4">
            <img className="w-11/12 mx-auto rounded-lg" src={this.props.img} alt={this.props.alt} />
          </div>
          <div className="px-6 py-4">
            <h1 className="text-teal-500 tracking-wider text-center mb-2">{this.props.title}</h1>
            <p className="text-gray-700 text-base">
              {this.props.children}
            </p>
          </div>
        </div>

    );
  }
}

Karte.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Karte
