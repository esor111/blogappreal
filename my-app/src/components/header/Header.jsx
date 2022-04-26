import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
const Settings = () => {
  return (
    <div>
    <div>
    <div class="owl-carousel owl-theme hero-slider">
    <div class="slide slide1">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center text-white">
                    <h6 class="text-white text-uppercase">design Driven for professional</h6>
                    <h1 class="display-3 my-4">Wecome to <br />Eshwor's BLOG</h1>
                    <Link to="/settings" class="btn btn-brand">Your Profile</Link>
                    <Link to="/write" class="btn btn-outline-light ms-3">Create Blog</Link>
                </div>
            </div>
        </div>
    </div>

</div>
    </div>
    </div>
  )
}

export default Settings