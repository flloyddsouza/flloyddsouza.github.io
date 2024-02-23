import ReactCounter from "./ReactCounter";

const Counter = () => {
  return (
    <div className="aali_tm_section">
      <div className="aali_tm_counter">
        <div className="container">
          <div className="counter_list">
            <ul className="wow fadeIn" data-wow-duration="1s">
              <li>
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="value">
                      <span className="abs">
                        {/* <span
                          className="tm_counter"
                          data-from={0}
                          data-to={5}
                          data-speed={1200}
                        >
                          0
                        </span> */}
                        <ReactCounter end={3} />
                      </span>
                    </div>
                    <div className="text">
                      <h3>
                        Commercial 
                        <br />
                        Mobile Apps
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="value">
                      <span className="abs">
                        <ReactCounter end={2} />
                        <label className="small">+</label>
                      </span>
                    </div>
                    <div className="text">
                      <h3>
                        Years of
                        <br />
                        Experience
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="value">
                      <span className="abs">
                        <ReactCounter end={300} />
                        <label className="small">+</label>
                      </span>
                    </div>
                    <div className="text">
                      <h3>
                        Happy
                        <br />
                        Users
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span className="border moving_effect" data-direction="x" />
      </div>
    </div>
  );
};

export default Counter;
