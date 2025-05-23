import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const portfolio = {
    home: {
      name: "Rekha G",
      intro: "I'm a full stack developer passionate about creating user-friendly web applications. Currently, I'm seeking internship opportunities to enhance my skills.",
      backgroundImage: "header-background.jpg"
    },
    about: {
      name: "Rekha G",
      email: "rekha.g@gmail.com",
      phone: "+9174185431008",
      bio: "Aspiring to become a proficient full-stack developer, my primary goal is to cultivate substantial expertise in the dynamic field of web development. I envision kickstarting this journey by securing a position in a reputable product-based company, where I can immerse myself in hands-on experiences and cutting-edge projects. With a commitment to continuous improvement, my long-term objective involves advancing to higher roles within the organization, contributing significantly to its growth and innovation. I am specialized in front-end development, focusing on creating, engaging, and intuitive user interfaces. This specialization serves as a foundation for my broader aspirations in the full-stack realm, where I aim to master both front-end and back-end technologies. Currently, I'm seeking internship opportunities to enhance my skills further and contribute to exciting projects.",
      profileImage: "pro.jpg"
    },
    resume: {
      education: [
        { qualification: "B.Tech (AI&DS)", institution: "Anna University Regional Campus", year: 2026, percentage: "Pursuing" },
        { qualification: "12th", institution: "Kalaimagal Kalalaya Matric Higher Secondary School", year: 2022, percentage: "89%" },
        { qualification: "10th", institution: "Kalaimagal Kalalaya Matric Higher Secondary School", year: 2020, percentage: "98%" }
      ],
      skills: [
        { name: "HTML5", logo: "skill1.png" },
        { name: "Python", logo: "python.jpg" },
        { name: "C", logo: "c.jpeg" },
        { name: "MERN Stack", logo: "mern.png" }
      ]
    },
    projects: [
      {
        name: "Drive Assist",
        technologies: ["Python drivers", "Image Processing", "NLP"],
        description: "Detects drowsiness and engages drivers on long rides."
      },
      {
        name: "Event Management System",
        technologies: ["JavaFX", "MySQL"],
        description: "Manages events, registration, and ticketing."
      }
    ],
    internships: [
      {
        company: "Octanet",
        description: [
          "Completed internship specializing in HTML and CSS.",
          "Contributed to front-end projects."
        ]
      },
      {
        company: "Nxtlogic Software Solutions",
        description: [
          "Worked with HTML, CSS and APIs.",
          "Gained practical back-end experience."
        ]
      }
    ]
  };

  return (
    <div>
      <nav className="nav">
        {['home', 'about', 'education', 'projects', 'internships'].map(section => (
          <button key={section} onClick={() => setActiveSection(section)}>{section.toUpperCase()}</button>
        ))}
      </nav>

      {activeSection === 'home' && (
        <header className="home" style={{ backgroundImage: `url(${portfolio.home.backgroundImage})` }}>
          <h1>{portfolio.home.name}</h1>
          <p>{portfolio.home.intro}</p>
          <button onClick={() => setActiveSection('about')} className="down">↓</button>
        </header>
      )}

      {activeSection === 'about' && (
        <section className="about">
          <h2>About Me</h2>
          <div className="about-content">
            <img src={portfolio.about.profileImage} alt="profile" />
            <div>
              <p>{portfolio.about.bio}</p>
              <h3>Contact Details</h3>
              <p>{portfolio.about.email}</p>
              <p>{portfolio.about.phone}</p>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'resume' && (
        <section className="resume">
          <h2>Education</h2>
          <table>
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Institution</th>
                <th>Year</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.resume.education.map((edu, i) => (
                <tr key={i}>
                  <td>{edu.qualification}</td>
                  <td>{edu.institution}</td>
                  <td>{edu.year}</td>
                  <td>{edu.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Skills</h2>
          <div className="skills">
            {portfolio.resume.skills.map((skill, i) => (
              <div key={i} className="skill">
                <img src={skill.logo} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'projects' && (
        <section className="projects">
          <h2>Projects</h2>
          {portfolio.projects.map((project, i) => (
            <div key={i}>
              <h3>{project.name}</h3>
              <p>{project.technologies.join(" || ")}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </section>
      )}

      {activeSection === 'internships' && (
        <section className="internships">
          <h2>Internships</h2>
          {portfolio.internships.map((intern, i) => (
            <div key={i}>
              <h3>{intern.company}</h3>
              {intern.description.map((desc, j) => (
                <p key={j}>{desc}</p>
              ))}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default App;
