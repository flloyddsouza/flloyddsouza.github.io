import { useEffect, useState } from "react";
import { fb, insta, msg, twitter } from "../svgImage";
import { parallax } from "../utilits";

const Home = () => {
  const [text, setText] = useState(1);
  useEffect(() => {
    parallax();
    const interval = setInterval(() => {
      setText(text < 3 ? text + 1 : 1);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <div className="aali_tm_section " id="home">
      <div className="aali_tm_hero">
        <div className="container">
          <div className="hero_inner">
            <div className="content">
              <span className="hello">Hello, {`I'm`}</span>
              <h3 className="name">Flloyd</h3>
              <div className="job">
                <span className="cd-headline rotate-1">
                  {" "}
                  {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                  <span className="cd-words-wrapper">
                    <b className={text === 1 ? "is-visible" : "is-hidden"}>
                      Mobile Developer
                    </b>
                    <b className={text === 2 ? "is-visible" : "is-hidden"}>
                      React Native Dev
                    </b>
                    <b className={text === 3 ? "is-visible" : "is-hidden"}>
                      Software Engineer
                    </b>
                    <b className={text === 4 ? "is-visible" : "is-hidden"}>
                      Front-End Dev
                    </b>
                    <b className={text === 5 ? "is-visible" : "is-hidden"}>
                      UI Designer
                    </b>
                  </span>
                </span>
              </div>
              <div className="hero_buttons">
                <div className="aali_tm_button">
                  <a className="anchor" href="#contact">
                    <span>Say Hello {msg}</span>
                  </a>
                </div>
                <div className="simple_button">
                  <a className="anchor" href="#about">
                    About Me
                  </a>
                </div>
              </div>

            </div>
            <div className="avatar parallax" style={{ position: "absolute" }}>
              <div className="main">
                <img
                  src="img/flloyd.png"
                  alt="image"
                  className="layer"
                  data-depth="0.1"
                  style={{ width: '-webkit-fill-available' }}
                />
              </div>
              <span className="one">
                <span className="in layer" data-depth="0.14" />
              </span>
              <span className="two">
                <span className="in layer" data-depth="0.18" />
              </span>
              <span className="three">
                <span className="in layer" data-depth="0.22" />
              </span>
              <span className="four">
                <span className="in layer" data-depth="0.26" />
              </span>
              <span className="five">
                <span className="in layer" data-depth="0.3" />
              </span>
              <h3 className="stroke_text">
                <span>Flloyd</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="hero_mail">
          <a className="line_anim" href="mailto:dsouzaflloyd.11@gmail.com" target="_blank" rel="noopener noreferrer">
            dsouzaflloyd.11@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
