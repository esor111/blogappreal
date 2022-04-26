import React from 'react'
import "./footer.css"
const Footer = () => {

  return (
    <div>
    <footer>
    <div class="footer-top text-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 text-center">
                    <h4 class="navbar-brand">ESSOR BLOG<span class="dot">.</span></h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from</p>
                    <div class="col-auto social-icons">
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom text-center">
        <p class="mb-0">Copyright@2020. All rights Reserved</p>
    </div>
</footer>
    </div>
  )
}

export default Footer