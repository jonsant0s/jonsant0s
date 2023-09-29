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
                      <p><strong> Hi I'm Jonathan.</strong> I am a passionate and results-driven Data Analyst and Software Developer with a strong foundation in Mathematics and Computer Science. </p>
                      <p> My journey in the world of data began at the University of Calgary, where I honed my skills in advanced statistics, hypothesis testing, and experimental design. Over the years, I have applied my knowledge to diverse projects, ranging from creating predictive models for historical labor force data to developing classification algorithms for leaf data. </p>
                      <p> But my expertise extends beyond data analysis. With specializations in Computer Science, I am well-versed in software development, with proficiency in languages such as Python, R, C#, and Java. I have hands-on experience in building robust database systems, optimizing software performance, and crafting efficient solutions. Whether it's engineering a backend system with Node.js and Express.js or fine-tuning classification rules, I approach each task with a deep understanding of both data science and software development principles.</p>
                      <p>In addition to my technical skills, I bring a collaborative spirit and a passion for problem-solving. I thrive in dynamic environments and am always eager to explore new challenges and opportunities, whether they involve data-driven insights or cutting-edge software applications.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                    <div className="services color-1">
                      <span className="icon2"><i className="icon-data" /></span>
                      <h3>Data Science / Analytics</h3>
                      <p>
                        <strong> Languages:</strong> <div>Python, R, MySQL</div>
                        <strong> Libraries:</strong> <div>Pandas, NumPy, Matplotlib, scipy, sklearn</div>
                        <strong> Data Science:</strong> <div>Advanced Statistics, Time Series, Experimental Design, Hypothesis Testing, Feature Engineering</div>
                        <strong> Tools: </strong> <div>Excel</div>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                    <div className="services color-2">
                      <span className="icon2"><i className="icon-phone3" /></span>
                      <h3>Front End Development</h3>
                      <p>
                        <strong> Languages:</strong> <div>React.js, HTML, CSS, React Native, C#  </div>
                        <strong> Tools: </strong> <div>Material-UI, Redux </div>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                    <div className="services color-3">
                      <span className="icon2"><i className="icon-git" /></span>
                      <h3>Back End Development</h3>
                      <p>
                        <strong> Languages:</strong> <div> SQL, Node.js, Typescript </div>
                        <strong> Tools:</strong> <div> Express, MongoDB, Firebase</div>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                    <div className="services color-4">
                      <span className="icon2"><i className="icon-layers2" /></span>
                      <h3>Information Technology</h3>
                      <p>
                        <strong> Tools:</strong> <div> PowerShell, Active Directory, ServiceNow, Microsoft Azure, Google Cloud </div>
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
