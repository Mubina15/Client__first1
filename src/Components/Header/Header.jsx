import "./Header.css";
import logo from "../../Assets/Assets/img/Logo.svg";

function Header() {
    return (
        <div className="Header">
            <div className="container header__container">
                <a href="index.html">
                    <img src={logo} alt="" />
                </a>

                <ul class="header__list">
                    <li class="header__item">
                        <a class="header__item--link" href="#">
                            Home12
                        </a>
                    </li>
                    <li class="header__item">
                        <a class="header__item--link" href="blog.html">
                            Blog
                        </a>
                    </li>
                    <li class="header__item">
                        <a class="header__item--link" href="#">
                            About Us
                        </a>
                    </li>
                    <li class="header__item">
                        <a class="header__item--link" href="#">
                            Contact us
                        </a>
                    </li>
                    <li class="header__item">
                        <a class="header__item--link Subscribe" href="#">
                            Subscribe
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default Header;
