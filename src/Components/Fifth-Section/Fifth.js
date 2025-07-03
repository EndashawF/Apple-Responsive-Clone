import React from "react";
import appletv from "../../commonResource/images/icons/apple-tv-logo.png";
import banker from "../../commonResource/images/home/banker.png";
import watch5Logo from "../../commonResource/images/icons/watch-series5-logo.png";

function Fifth() {
  return (
    <section className="fifth-heghlight-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={appletv} />
                </div>
              </div>

              <div className="tvshow-logo-wraper">
                <img src={banker} />
              </div>

              <div className="watch-more-wrapper">
                <a
                  href="https://tv.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stream now on the Apple TV app
                </a>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={watch5Logo} />
                </div>
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a
                      href="https://www.apple.com/apple-watch-series-9/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.apple.com/shop/buy-watch/apple-watch"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fifth;
