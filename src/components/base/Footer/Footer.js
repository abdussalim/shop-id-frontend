import React from 'react'
import '../../module/home/StyleHome.css'
const Footer = () => {
  return (
    <div>
      <footer className="py-3 bg-success mt-5 footer-dekstop fixed-bottom">
        <div className="container">
          <p className="footer-text m-0 text-center text-white">
            Copyright &copy; <strong><a className="text-white footer-link" target="_blank" href="https://linkedin.com/in/abdussalim/">Abdus Salim</a></strong>  2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer