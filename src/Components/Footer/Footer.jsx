import "./Footer.css"


import logo from "../../Assets/Assets/img/Logo.svg";
import facebook from "../../Assets/Assets/img/face_book.png";
import twitter from "../../Assets/Assets/img/twitter-w.png";
import instagram from "../../Assets/Assets/img/instagram.png";
import in_w from "../../Assets/Assets/img/in_w.png";





function Footer() {
    return (
        <footer className="footer">
        <div className="footer__container">
           
            <div className="footer__div--2">
                    <img src={logo}alt="logo" width="140" height="28" />

                <ul className="footer__list">
                    <li className="footer__item">
                        <a className="footer__link" href="#">
                            Home
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="blog.html">
                            Blog
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="#">
                            About us
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="#">
                            Contact us
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="#">
                            Privacy Policy
                        </a>
                    </li>
                </ul>
    
            </div>

            <div className="div__subscribe">
                <h2 className="footer__div--title">
                    Subscribe to our news letter to get latest updates and news
                </h2>

                <form>
                    <input className="input" type="email" placeholder="Enter Your Email" name="Email" autocomplete="off" required />
                </form>

                <a className="footer__link--sub" href="#">
                    Subscribe
                </a>
            </div>

           <div className="other">
            <div>
                <p className="footer__text--fintown">
                    Finstreet 118 2561 Fintown
                </p>
                <a className="link" href="Hello@finsweet.com">Hello@finsweet.com  020 7993 2905</a>
            </div>
            <div>
                <img className="web" src={facebook} alt="facebook" width="16" height="16" />
                <img className="web" src={twitter} alt="twitter-w" width="16" height="16" />
                <img className="web" src={instagram} alt="insta" width="16" height="16" />
                <img className="web" src={in_w} alt="in_w" width="16" height="16" />
            </div>
            </div>
           </div>
    </footer>
    )


}

export default Footer;
