import React from 'react'

function Second() {
  return (
    <div>
      <section className="second-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>
          <div className="title-wraper bold black">MacBook Air</div>
          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>
          <div className="price-wrapper grey">From $999.</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="https://www.apple.com/macbook-air/">Learn more</a>
              </li>
              <li>
                <a href="https://www.apple.com/shop/buy-mac/macbook-air">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Second
