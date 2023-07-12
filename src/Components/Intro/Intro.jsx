import "./Intro.css"


function Intro() {
    return (
        <div className="intro">
            <div class="intro__container">
                <p class="intro__text">
                    Posted on <span class="intro__span">startup</span>
                </p>

                <h1 class="intro__title">
                    Step-by-step guide to choosing great font pairs
                </h1>

                <p class="intro__text--west">
                    By <span class="intro__span--west">James West</span>  |  May 23, 2022
                </p>

                <p class="intro__text--duis">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>

                <a class="intro__link" href="#">
                    Read More
                </a>
            </div>
        </div>
    )
}

export default Intro;