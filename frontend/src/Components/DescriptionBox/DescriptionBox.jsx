import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>

        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates buying.</p>
            <p>E-0commerce websites typically display products or services an detailed descriptions, images, prices, and any available variations.</p>
        </div>
    </div>
  )
}

export default DescriptionBox