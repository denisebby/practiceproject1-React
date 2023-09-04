import React from 'react'

import PropTypes from 'prop-types'

import './featurecard.css'

const Featurecard = (props) => {
  return (
    <div className={`featurecard-container ${props.rootClassName} `}>
      <div className="featurecard-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="featurecard-image"
        />
      </div>
      <div className="featurecard-container2">
        <h1 className="featurecard-text Headline3">{props.heading}</h1>
        <span className="Content">{props.text}</span>
      </div>
    </div>
  )
}

Featurecard.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1542362567-b07e54358753?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxjYXJzfGVufDB8fHx8MTY5Mzg0ODM5NXww&ixlib=rb-4.0.3&w=200',
  heading: 'AI Insights',
  text: 'blah blahblah blahblah blahblah blahblah blah',
}

Featurecard.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Featurecard
