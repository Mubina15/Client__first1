import "./Main.css"

import bino from "../../Assets/Assets/img/bino.jpg";
import pattern from "../../Assets/Assets/img/pattern.jpg"
import uy from "../../Assets/Assets/img/uy.png"
import raketa from "../../Assets/Assets/img/raketa.png"
import yuqoriga from "../../Assets/Assets/img/yuqoriga.png"
import brain from "../../Assets/Assets/img/brain.png"
import friends from "../../Assets/Assets/img/friends.jpg"
import man from "../../Assets/Assets/img/man.png"
import facebook from "../../Assets/Assets/img/facebook_b.png"
import twitter from "../../Assets/Assets/img/twitter.png"
import instagram from "../../Assets/Assets/img/insta.png"
import ins from "../../Assets/Assets/img/in.png"
import woman from "../../Assets/Assets/img/woman.png"
import fashion from "../../Assets/Assets/img/fashion.png"
import baker from "../../Assets/Assets/img/baker.png"
import featuret from "../../Assets/Assets/img/Featured.svg"
import logoipsum from "../../Assets/Assets/img/logoipsum.svg"
import logo2 from "../../Assets/Assets/img/Logo2.svg"
import logoearth from "../../Assets/Assets/img/logo_earth.svg"
import logo4 from "../../Assets/Assets/img/logo_4.svg"
import logomain from "../../Assets/Assets/img/logo_main.svg"
import profie from "../../Assets/Assets/img/profie.png"
import oldingi from "../../Assets/Assets/img/oldingi.png"
import next from "../../Assets/Assets/img/next.png"


function Main() {
    return (
        <main className="main">
            <section className="main__section">
                <div className="container main__container">
                    <div className="main__div">
                        <h4 className="main__title">
                            Featured Post
                        </h4>
                        <h4 class="main__title--all">
                            All Posts
                        </h4>
                        <a href="#" class="main__link">
                            View All
                        </a>
                    </div>


                    <div className="father">
                        <div className="main__div2">
                            <img src={bino} alt="rasm" width="669" height="352" />

                            <a class="main__link--john" href="#">
                                By <span class="main__span--john">John Doe </span> l   May 23, 2022
                            </a>

                            <h5 class="main__title--dolor">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                            </h5>
                            <p class="main__text--cillum">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                            <a class="main__link--read" href="#">
                                Read More
                            </a>
                        </div>


                        <div className="main__div3">
                            <ul className="main__list">
                                <li className="main__item">
                                    <a className="main__item--link" href="#">
                                        <a className="main__item--aug" href="#">
                                            By <span className="main__span--aug">John Deo</span> 1  Aug 23, 2021
                                            <h5 className="main__item--title">
                                                8 Figma design systems that you can download for free today.
                                            </h5>
                                        </a>
                                    </a>
                                </li>
                                <li className="main__item">
                                    <a className="main__item--link" href="#">
                                        <a className="main__item--aug" href="#">
                                            By <span className="main__span--aug">John Deo</span> 1  Aug 23, 2021
                                            <h5 className="main__item--title">
                                                8 Figma design systems that you can download for free today.
                                            </h5>
                                        </a>
                                    </a>
                                </li>
                                <li className="main__item">
                                    <a className="main__item--link" href="#">
                                        <a className="main__item--aug" href="#">
                                            By <span className="main__span--aug">John Deo</span> 1  Aug 23, 2021
                                            <h5 className="main__item--title">
                                                8 Figma design systems that you can download for free today.
                                            </h5>
                                        </a>
                                    </a>
                                </li>
                                <li className="main__item">
                                    <a className="main__item--link" href="#">
                                        <a className="main__item--aug" href="#">
                                            By <span className="main__span--aug">John Deo</span> 1  Aug 23, 2021
                                            <h5 className="main__item--title">
                                                8 Figma design systems that you can download for free today.
                                            </h5>
                                        </a>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>



            </section>

            <section className="main__section2">
                <div className="container2 main__container2">

                    <img className="main__img" src={pattern} alt="" width="1061" height="23" />



                    <div className="main__div--about">
                        <p className="main__text--about">ABOUT US</p>

                        <h4 className="main__title--about">
                            We are a community of content writers who share their learnings
                        </h4>

                        <p className="main__text--ipsum">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a className="main__link--more" href="#">
                            Read More
                        </a>
                    </div>
                    <div className="main__div--mision">


                        <p className="main__text--mision">Our mision</p>
                        <h5 className="main__title--mision">
                            Creating valuable content for creatives all around the world
                        </h5>
                        <p className="main__text--nisi">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </section>

            <section className="main__section">
                <div className="container main__container3">
                    <h2 className="main__title--choose">
                        Choose A Catagory
                    </h2>

                    <ul className="main__list--sect">
                        <li className="main__item__sect">

                            <img className="main__item--img2" src={uy} alt="uy" width="48" height="48" />

                            <h3 className="main__title--business">
                                Business
                            </h3>
                            <p className="main__text--amet">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </p>
                        </li>
                        <li className="main__item__sect2">
                            <img className="main__item--img2" src={raketa} alt="raketa" width="30" height="30" />

                            <h3 className="main__title--business">
                                Startup
                            </h3>
                            <p className="main__text--amet">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </p>
                        </li>
                        <li className="main__item__sect">
                            <img className="main__item--img2" src={yuqoriga} alt="" width="48" height="48" />
                            <h3 className="main__title--business">
                                Economy
                            </h3>
                            <p className="main__text--amet">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </p>
                        </li>
                        <li className="main__item__sect">
                            <img className="main__item--img2" src={brain} alt="brain" width="48" height="48" />
                            <h3 className="main__title--business">
                                Technology
                            </h3>
                            <p className="main__text--amet">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="main__section">
                <div className="container main__container4">
                    <img classNameName="img" src={friends} alt="friends" width="949" height="705" />

                    <div className="main__div--started">
                        <p className="main__text--started">
                            Why we started
                        </p>
                        <h3 className="main__title--started">
                            It started out as a simple idea and evolved into our passion
                        </h3>
                        <p className="main__text--nostrud">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <a className="main__link--story" href="#">
                            Discover our story
                        </a>
                    </div>
                </div>
            </section>

            <section className="main__section5">
                <div className="container3 main__container5">
                    <h3 className="main__title--list">
                        List of Authors
                    </h3>

                    <ul className="main__list--authors">
                        <li className="main__item--authors">
                            <img className="man" src={man} alt="man" width="128" height="128" />

                            <h3 className="main__title--floyd">
                                Floyd Miles
                            </h3>
                            <a className="main__link--floyd" href="#">
                                Content Writer @Company
                            </a>

                            <img className="img--authors" src={facebook} alt="facebook_b" width="16" height="16" />

                            <img className="img--authors" src={twitter} alt="twitter" width="16" height="14" />

                            <img className="img--authors" src={instagram} alt="insta" width="16" height="16" />

                            <img className="img--authors" src={ins} alt="in" width="16" height="16" />

                        </li>

                        <li className="main__item--authors">
                            <img className="man" src={woman} alt="man" width="128" height="128" />

                            <h3 className="main__title--floyd">
                                Dianne Russell
                            </h3>
                            <a className="main__link--floyd" href="#">
                                Content Writer @Company
                            </a>

                            <img className="img--authors" src={facebook} alt="facebook_b" width="16" height="16" />

                            <img className="img--authors" src={twitter} alt="twitter" width="16" height="14" />

                            <img className="img--authors" src={instagram} alt="insta" width="16" height="16" />

                            <img className="img--authors" src={ins} alt="in" width="16" height="16" />

                        </li>
                        <li className="main__item--authors">
                            <img className="man" src={fashion} alt="man" width="128" height="128" />

                            <h3 className="main__title--floyd">
                                Jenny Wilson
                            </h3>
                            <a className="main__link--floyd" href="#">
                                Content Writer @Company
                            </a>

                            <img className="img--authors" src={facebook} alt="facebook_b" width="16" height="16" />

                            <img className="img--authors" src={twitter} alt="twitter" width="16" height="14" />

                            <img className="img--authors" src={instagram} alt="insta" width="16" height="16" />

                            <img className="img--authors" src={ins} alt="in" width="16" height="16" />

                        </li>
                        <li className="main__item--authors">
                            <img className="man" src={baker} alt="man" width="128" height="128" />

                            <h3 className="main__title--floyd">
                                Leslie Alexander
                            </h3>
                            <a className="main__link--floyd" href="#">
                                Content Writer @Company
                            </a>

                            <img className="img--authors" src={facebook} alt="facebook_b" width="16" height="16" />

                            <img className="img--authors" src={twitter} alt="twitter" width="16" height="14" />

                            <img className="img--authors" src={instagram} alt="insta" width="16" height="16" />

                            <img className="img--authors" src={ins} alt="in" width="16" height="16" />

                        </li>
                        ``
                    </ul>
                </div>
            </section>

            <section className="main__section">
                <div className="container main__container">
                    <p className="main__text--we">
                        We are
                    </p>
                    <div className="main__div--logos">
                        <img className="main__img--we" src={featuret} alt="Featured" width="136" height="32" />

                        <img className="main__img--we" src={logoipsum} alt="logoipsum" width="160" height="32" />

                        <img className="main__img--we" src={logo2} alt="Logo2" width="136" height="32" />

                        <img className="main__img--we" src={logoearth} alt="logo_earth" width="135" height="32" />

                        <img className="main__img--we" src={logo4} alt="logo_4" width="153" height="32" />

                        <img className="main__img--we" src={logomain} alt="logo_main" width="136" height="32" />

                    </div>
                </div>

            </section>

            <section className="main__section">
                <div className="container main__container6">
                    <div className="main__div_1">
                        <p className="main__text--testimonials">
                            TESTIMONIALs
                        </p>
                        <h2 className="main__title--people">
                            What people say about our blog
                        </h2>
                        <p className="main__text--people">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                    </div>

                    <div className="main__div_2">
                        <p className="main__text--tempor">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="div__jonathan">
                        
                            <div className="div__jonathan">
                                <img className="new__img" src={profie} alt="profie" width="48" height="48" />

                                <div>
                                    <h4 className="main__title--jonathan">
                                        Jonathan Vallem
                                    </h4>
                                    <p className="main__text--jonathan">
                                        New york, USA
                                    </p>
                                </div>

                                <img className="oldin" src={oldingi} width="48" height="48" />
                                <img src={next} alt="next" width="62" height="62" />
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className="main__section">
                <div className="container7">
                    <h2 className="main__title--now">
                        Join our team to be a part of our story
                    </h2>
                    <p className="main__text--now">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                    <a className="main__link--now" href="#">
                        Join Now
                    </a>
                </div>
            </section>

        </main>
    )


}

export default Main;