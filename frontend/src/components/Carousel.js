import {  faArrowRight  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Images from './images/imagejson'


export default function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Images.home.banner} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
        <h5 className='h5head'>Quick parcel deliverly, <span className='golden'>from $25</span></h5>
        <h1 className='bannerhead'>Everyone's Talking <br /> About Sweeper and <br /> funnel</h1>
        <button type="button" className="btn btn-dark shopbutton">Start Shopping <FontAwesomeIcon icon={faArrowRight}/></button>
      </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
