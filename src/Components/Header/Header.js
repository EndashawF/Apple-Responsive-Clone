import React from "react";
import logo from "../../commonResource/images/icons/logo-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";

function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <a className="navbar-brand mx-auto" href="https://www.apple.com/">
            <img src={logo} alt="logo" />
          </a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/mac/"
                >
                  Mac
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/iphone/"
                >
                  iPhone
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/ipad/"
                >
                  iPad
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/watch/"
                >
                  Watch
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/tv-home/"
                >
                  TV
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/music/"
                >
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://support.apple.com/"
                >
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/search"
                >
                  <img src={search} alt="search" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/shop/bag"
                >
                  <img src={cart} alt="cart" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
