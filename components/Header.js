import React from "react";
import PropTypes from "prop-types";
import Link from "./Link";
import Navigation from "./Navigation";
import logo from "assets/img/logo.svg";
import navigationPages from "./navigation-pages";
//import Countdown from "./Countdown";
//import Interactive from "antwar-interactive";

const Header = ({ pathname, title }) => {
  const isHomePage = pathname === "/";
  return isHomePage ? (
    <header className={"header header_index"}>
      <div className="header--container container grid grid_6col">
        <Navigation pathname={pathname} pages={navigationPages} />
        <Link to="/" className="rubric site-name header--logo">
          <h1 className="logo">
            <img
              src={logo}
              width={280}
              height={252}
              alt="Freezing Edge Logo"
              className="logo--image"
            />
          </h1>
        </Link>

        <h2 className="header--tagline">
          The edge isn't bleeding, it's freezing!
        </h2>

        <section className="header--dates">
          <time dateTime="2019-11-12/2019-11-13" className="header--date">
            12-13.11.2019
          </time>
          <address className="header--location">Helsinki, Finland</address>
        </section>
        {/*<Interactive
          id="components/Countdown.js"
          component={Countdown}
          toDate="2019-04-24"
          containerProps={{ className: "countdown--container" }}
        />*/}
        <section className="header--buy">
          {/*<Link to="/#tickets" className="buy-button">
            Buy tickets
  </Link>*/}
        </section>
      </div>
    </header>
  ) : (
    <header className="header">
      <div className="header--container container grid grid_6col">
        <Navigation pathname={pathname} pages={navigationPages} />
        <Link to="/" className="rubric site-name header--logo">
          <h1 className="logo">
            <img
              src={logo}
              width={280}
              height={252}
              alt="Freezing Edge Logo"
              className="logo--image"
            />
          </h1>
        </Link>
        <h2 className="header--pageTitle">{title}</h2>
      </div>
    </header>
  );
};
Header.propTypes = {
  pathname: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
