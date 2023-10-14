import React from 'react';
import Project from './Project';
import Contact from './Contact';
import Header from './Header';
import 'font-awesome/css/font-awesome.min.css';

function Portfolio() {
    const { name, email, phone, location} = Contact;

  return (
    <div>
       <header>
        <h1 class="head">J a s m i t h a P e s a l a</h1>
        <Header />
      </header>
      <main>
      <h2>About Me</h2>
        <section class="background">
          <p> Hellooo..This is Jasmitha, I am currently pursuing my btech third year, Computer Science and Engineering in VITAP University. I love learning new skills. I am good at Python, better at Web Designing and best at Java. I am learning more about all these skills and want to start learning Data Science too. This is my portfolio I have made some basic projects using my WebDev skils you can find them here below..:)
          </p>
        </section>
        <section class="section-spacing">
  <h2 class="heading-spacing h mee">Education</h2>

  <div class="background">
    <h3 class="heading-spacing h3">Bachelor of Technology in Computer Science</h3><br></br>
    <p class="paragraph-spacing"><strong>University Name: </strong>Vellore Institute of Technology</p>
    <p class="paragraph-spacing"><strong>Location:</strong> Amaravathi, Andhra Pradesh</p>
    <p class="paragraph-spacing"><strong>Graduation Date:</strong> May 2025</p>
  </div>
  <div class="background">
    <h3 class="heading-spacing h3">Senior Secondary</h3><br></br>
    <p class="paragraph-spacing"><strong>Institute Name: </strong>Aakash Institute</p>
    <p class="paragraph-spacing"><strong>Location: </strong> Nellore, Andhra Pradesh</p>
    <p class="paragraph-spacing"><strong>Passed Out: </strong> June 2021</p>
  </div>
  <div class="background">
    <h3 class="heading-spacing h3">Secondary School Certificate</h3><br></br>
    <p class="paragraph-spacing"><strong>School Name: </strong>Dr. KKR's Gowtham</p>
    <p class="paragraph-spacing"><strong>Location: </strong> Nellore, Andhra Pradesh</p>
    <p class="paragraph-spacing"><strong>Passed Out: </strong> March 2019</p>
  </div>
</section>

      <section>
        <h2>Projects</h2>
        <div className="projects">
          {Project.map((project) => (
            <div key={project.id} className="project background">
              <h3>{project.title}</h3>
              <br></br>
              <p>{project.description}</p>
              <br></br>
              <p><b>Technologies used:</b> {project.technologiesUsed.join(", ")}</p><br></br>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Contact Me</h2>
        <div class="background">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <strong>Phone:</strong> {phone}
          </li>
          <li>
            <strong>Location:</strong> {location}
          </li>
        </ul></div></section>
      <footer>
  <div class="background">
    
    <ul>
        <li class="icon"><a href="https://www.instagram.com/jasmitha.10"><i className="fa fa-instagram"></i>Instagram</a></li>
        <li class="icon"><a href="https://www.twitter.com"><i className="fa fa-twitter"></i>Twitter</a></li>
        <li class="icon"><a href="https://github.com/Jasmitha02"><i className="fa fa-github"></i>GitHub</a></li>
    </ul>
    <p>&copy; 2023 Jasmitha. All rights reserved.</p>
  </div>
</footer>
      </main>
    </div>
  );
}

export default Portfolio;
