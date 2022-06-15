import React, { Component } from 'react';

export default class Experience extends Component {
  render(){
    return(
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Experience</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                   <div className="timeline-centered">
                     <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                        <div className="timeline-entry-inner">
                           <div className="timeline-icon color-2">
                              <i className="icon-pen2"></i>
                           </div>
                           <div className="timeline-label">
                            <h2><a href="#">Technical Systems Analyst at University of Calgary</a> <span>2021-Present</span></h2>
                              <p>Projects: Access Management Utilites Software (C#, .NET, PowerShell), Hardware Inventory Management System (C#, .NET, PowerShell, SQL).
                                 Versioning for both projects done in GitLab.
                              </p>
                           </div>
                        </div>
                     </article>

                     <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div className="timeline-entry-inner">
                           <div className="timeline-icon color-3">
                              <i className="icon-pen2"></i>
                           </div>
                           <div className="timeline-label">
                            <h2><a href="#">IT Technical Analyst at University of Calgary</a> <span>2020-2021</span></h2>
                              <p>Projects: Group File Share Automation (ServiceNow, PowerShell, User Acceptance Testing)</p>
                           </div>
                        </div>
                     </article>

                     <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                        <div className="timeline-entry-inner">
                           <div className="timeline-icon color-none">
                           </div>
                        </div>
                     </article>
                  </div>
               </div>
             </div>
          </div>
        </section>
      </div>
    )
  }
}
