import React, { Component } from 'react';

export default class Services extends Component {
  render() {
    return(
      <div>
        <section className="colorlib-services" data-section="services">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-data"></i>
                  </span>
                  <div className="desc">
                    <h3>Data Science & Analytics</h3>
                    <p>Advanced Statistics and Predictive Modelling</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-layers2"></i>
                  </span>
                  <div className="desc">
                    <h3>Full Stack Development</h3>
                    <p>React and JavaScript</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3"></i>
                  </span>
                  <div className="desc">
                    <h3>Cyber Security</h3>
                    <p>Identity and Access Management</p>
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
