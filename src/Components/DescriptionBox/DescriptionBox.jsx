import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews(122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>"Laura Online brings the latest trends right to your fingertips!  Dive into a world of style with our curated collection of clothing, 
            designed to elevate your wardrobe and inspire confidence. From chic essentials to 
            statement pieces, we've got you covered for every occasion. 
            Whether you're shopping for workwear, weekend vibes, or special events, 
            Laura Online has something for everyone. </p>
            <p>With easy navigation and secure checkout, 
            your next fashion find is just a click away. Join the fashion revolution today and experience the 
            convenience of online shopping with Laura!"</p>
      </div>

    </div>
  )
}

export default DescriptionBox
