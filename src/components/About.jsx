import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

class About extends Component {
  render() {
    return (

      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="rounded-full md:w-56 w-1/2 md:w-1/1 mx-auto" src={this.props.imgsrc} alt={this.props.imgalt} />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="uppercase tracking-wide text-xl text-indigo-600 font-bold">{this.props.title}</div>
          <Link to="/" className="block mt-1 leading-tight font-semibold text-gray-800 hover:underline">{this.props.tag}</Link>
          <p className="mt-2 text-gray-300 text-justify inline-block align-middle">{this.props.text}</p>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
About.propTypes={
  title: PropTypes.string.isRequired
};
export default About
