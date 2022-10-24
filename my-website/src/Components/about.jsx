import Navbar from "../Navigation/Navbar";
import React from "react";
import './about.css';
import cinder from '../images/cinder.png';

const About = () => {
  return (
    <div className="parent">
      <header className='nav-head'>
        <Navbar className = 'nav-bar'/>
      </header>

      <body className="contain">
        <div className="container-row-about">
            <div className="container-column1">
              
              <div className="row1-left">
                <p className="section-header">Education</p>
                <p className="sub-header">
                  Michigan State University
                </p>
                <p className="section-body">
                  Expected graduation: December 2022
                </p>
                <p className="section-body">
                  Major: Computer Science Engineering
                </p>
                <p className="section-body">
                  Minor: Data Science
                </p>
                <p className="section-body">
                  GPA: 3.36
                </p>


                <p className="section-header">Personal</p>
                <p className="sub-header">
                  Hobbies
                </p>
                <p className="section-body">
                  Some of my favorite hobbies are disc golfing, seeing my friends, programming, and playing online games with my friends. I also enjoy hiking, swimming
                  , surfing the internet, and having some alone time.
                </p>
                <p className="sub-header">
                  Interests
                </p>
                <p className="section-body">
                  I have many interests, and try to take on the world with a life long learner mentality. I love learning new things about science, history, and technology. 
                  I also like to keep up with the professional scene of certain online games that I play.
                </p>

                <p className="sub-header">
                  Pets
                </p>
                <p className="section-body">
                  My family has always had animals around the house. Currently we have two dogs and two cats living with us. The only one who belongs to me is my cat named
                  Cinder. Whenever I'm away at school she comes and lives with me - see her picture below!
                </p>
                <img className='cinder-image' src={cinder} alt="My cat Cinder" height={200} width={200}></img>
              </div>

            </div>
            <div className="container-column2">
              
              <div className="container-column2">
                
                <div className="row1-left">
                  <p className="section-header">Experience</p>
                  <p className="sub-header">
                    Michigan State University
                  </p>
                  <p className="section-body">
                    Role:<br /> Undergraduate Learning Assistant
                  </p>
                  <p className="section-body">
                    Responsibilities:<br /> In this role I have had to perform two main tasks. Firstly, in this role I have taught a class of around 30 students basic programming concepts
                    using Python. Secondly, I have assisted in running a help room where students can come to get extra help outside of class.
                  </p>
                  <p className="sub-header">
                    MGA Research
                  </p>
                  <p className="section-body">
                    Role:<br /> Software Developer Intern
                  </p>
                  <p className="section-body">
                    Responsibilities:<br /> In this role my main task was to produce useful macros in VBA which could generate client reports when given data from tests. I 
                    produced a macro with a graphical user interface which could take multiple different types of data from different tests and compile it into reports of 
                    different types depending on the data.
                    I previously had no experience with VBA, and therefore had to learn it on the job.
                  </p>
                  <p className="sub-header">
                    Michigan State University
                  </p>
                  <p className="section-body">
                    Role:<br /> Undergraduate Research Assistant
                  </p>
                  <p className="section-body">
                    Responsibilities:<br /> In this role I worked with a professor at Michigan State University to develop a model of a growing planets atmosphere based on
                    a set of input parameters. The professor and I first developed a technical document outlining the model, and I then coded the routine in C++.
                  </p>
                </div>

              </div>


            </div>
        </div>
      </body>
      <hr className='head-foot-line'></hr>
      <footer className='contact-info'>
        <p className='footer-text'>
          contact me
        </p>
        <p className='footer-text'>
          behmnoah@gmail.com/behmnoah@msu.edu 
        </p>
      </footer>
    </div>
  );
};

export default About;