import React from 'react'

function First() {
  return (
    <div>
      <section className="first-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>
          <div className="title-wraper bold black">iPad Pro</div>
          <div className="description">Thinpossible.</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="https://www.apple.com/ipad-pro/">Learn more</a>
              </li>
              <li>
                <a href="https://www.apple.com/shop/buy-ipad/ipad-pro">Buy</a>
              </li>
            </ul>
          </div>
          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              Available starting 3.25
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default First
