const Footer = () => {
  return (
    <div className="aali_tm_section">
      <div className="aali_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="top">
              <div className="logo">
                
              </div>
              <div className="social">
                <span>Connect</span>
                <ul>
                  <li title="LinkedIn">
                    <a href="https://www.linkedin.com/in/flloyddsouza" target="_blank">
                      <i className="icon-linkedin-1" />
                    </a>
                  </li>
                  <li title="GitHub">
                    <a href="https://github.com/flloyddsouza" target="_blank">
                      <i className="icon-github-1" />
                    </a>
                  </li>
                  <li title="Email">
                    <a href="mailto:dsouzaflloyd.11@gmail.com" target="_blank" rel="noopener noreferrer">
                      <i className="icon-mail-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <p>
                  Designed with love by Flloyd © {new Date().getFullYear()}
                </p>
              </div>
              
            </div>
            <span
              className="border moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
        <span className="square moving_effect" data-direction="x" />
      </div>
    </div>
  );
};

export default Footer;
