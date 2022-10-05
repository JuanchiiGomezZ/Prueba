import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faApple} from "@fortawesome/free-brands-svg-icons";

const Banner2 = () => {
  return (
    <div className="squares">
      <div className="sq1" href="##">
        <div className="sq1Text">
          <h2>iPhone 13 Pro</h2>
          <p>Oh. So. Pro.</p>
          <a href="##">Learn More</a>
          <Link to="/Shop/iPhone/4">Buy</Link>
        </div>
        <img
          src="https://i.postimg.cc/66L1L1yS/iphone13-Square.png"
          alt="iPhone13"
        />
      </div>
      <div className="sq2" href="##">
        <div className="sq2Text">
          <div className="sq2Title">
            <FontAwesomeIcon icon={faApple}></FontAwesomeIcon>
            <h2>Watch</h2>
          </div>
          <p className="watchSeries">SERIES 8</p>
          <p>A healthy leap ahead.</p>
          <a href="##">Learn More</a>
          <a href="##">Buy</a>
        </div>
      </div>
      <div className="sq3" href="##">
        <div className="sq3Text">
          <h2>iPad</h2>
          <h2 className="ipadAir">Air</h2>
          <p>Light. Bright. Full of might.</p>
          <a href="##">Learn More</a>
          <Link to="/Shop/iPad/20">Buy</Link>
        </div>
        <img
          src="https://www.apple.com/v/ipad-air/r/images/overview/features/iris__fnhnshkpwl6y_large.jpg"
          alt="iPadAir"
        />
      </div>
      <div className="sq4" href="##">
        <div className="sq4Text">
          <div className="titleWatch">
            <FontAwesomeIcon icon={faApple}></FontAwesomeIcon>
            <h2>Watch</h2>
            <h2 className="watchSE">SE</h2>
          </div>
          <p>Heavy on features. Light on price</p>
          <a href="##">Learn More</a>
          <a href="##">Buy</a>
        </div>
        <img
          src="https://www.apple.com/v/watch/ax/images/overview/se/tile-watch-se__knji2d25x8qe_large_2x.jpg"
          alt="AppleWatch"
        />
      </div>
    </div>
  );
};

export default Banner2;
