import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p><strong> Hi I'm Jonathan.</strong> Currently a student at the University of Calgary studying Economics and Computer Science.</p>
                      <p> I have experience with automation testing working in IT, as well as writing scripts in PowerShell to convert large amount of file data </p>
                      <p>My sole interests lie in Web and Mobile development, as well as foundational knowledge in Data Science. I also have a strong desire to learn and collaborate with others.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                    <div className="services color-2">
                      <span className="icon2"><i className="icon-globe-outline" /></span>
                      <h3>Front End Development</h3>
                      <p>
                        <strong> Languages:</strong> <div>React.js, HTML, CSS, React Native  </div>
                        <strong> Tools: </strong> <div>Material-UI, Redux </div>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                    <div className="services color-3">
                      <span className="icon2"><i className="icon-data" /></span>
                      <h3>Back End Development</h3>
                      <p>
                        <strong> Languages/Tools:</strong> <div> SQL, Node.js, Typescript </div>
                        <strong> Tools:</strong> <div> Express, MongoDB, Firebase</div>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                    <div className="services color-4">
                      <span className="icon2"><i className="icon-git" /></span>
                      <h3>IT</h3>
                      <p>
                        <strong> Tools:</strong> <div> PowerShell, Active Directory, ServiceNow </div>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                    <div className="services color-1">
                      <span className="icon2"><i className="icon-bulb" /></span>
                      <h3>Data Analysis</h3>
                      <p>
                        <strong> Languages:</strong> <div>Python, R</div>
                        <strong> Tools: </strong> <div>Stata, Excel</div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
