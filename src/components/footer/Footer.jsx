import './Footer.scss'
import logo from '../../assets/LOGO.png'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer