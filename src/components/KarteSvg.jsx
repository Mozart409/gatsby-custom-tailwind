import React, { Component } from 'react'
import PropTypes from 'prop-types'


class KarteSvg extends Component {
  render() {
    return (
        <div className="mx-auto mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-2xl">
        <div className="items-center align-center mx-auto">
        <svg viewBox="0 0 300 300" height="300" width="300">

        <rect height="300" width="300" fill="url(#grad1)"></rect>
         <text x="100" y="100" fill={this.props.textcolor}>{this.props.svgtext}</text>
       </svg>
        </div>
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

KarteSvg.propTypes = {
  svgtext: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default KarteSvg
