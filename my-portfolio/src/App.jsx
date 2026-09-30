import React from "react";
import "./App.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiCplusplus, SiMysql } from "react-icons/si";
import ThemeToggle from "./assets/ThemeToggle.jsx";
import itImage from "./assets/IT image.png";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          <a href="#top" className="logo">
            hanT-spec
          </a>
        </h2>
        <nav>
          <ul>
            <li><a href="#about" className="nav-btn">About Me</a></li>
            <li><a href="#skills" className="nav-btn">Skills</a></li>
            <li><a href="#projects" className="nav-btn">Projects</a></li>
            <li><a href="#contact" className="nav-btn">Contact</a></li>
          </ul>
        </nav>
        <ThemeToggle />
      </header>

      <div className="content">
        <img
          src={itImage}
          alt="IT_image"
          className="profile-image"
        />
        <p className="welcome-message">
          Hi, I'm Hanna, an aspiring web developer.
          <br />Enjoy!
        </p>
      </div>

      {/* About Section */}
      <div className="about-section" id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer with a strong interest in creating
          user-friendly and visually appealing websites.
        </p>
        <p>
          I enjoy learning new technologies and continuously improving my skills.
        </p>
        <p>
          I have a strong foundation in HTML, CSS, and JavaScript. I am still
          teaching myself React and backend development.
        </p>
        <p>
          My computer science courses have provided me with a solid understanding
          of programming concepts and problem-solving techniques using various
          programming languages like C++, Java, and SQL.
        </p>
      </div>

      {/* Skills Section */}
      <div className="skills-section" id="skills">
        <h2 className="title">Skills</h2>
        <p>These are the languages I use mostly... and some I’m still learning:</p>
        <div className="skills-grid">
          <div><FaHtml5 /> HTML</div>
          <div><FaCss3Alt /> CSS</div>
          <div><FaJs /> JavaScript</div>
          <div><FaReact /> React (learning)</div>
          <div><SiCplusplus /> C++</div>
          <div><FaJava /> Java</div>
          <div><SiMysql /> SQL (learning)</div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-section" id="projects">
        <h2 className="title">Projects</h2>
        <p>Here are some of my projects:</p>
        <div className="projects-grid">
          <div className="project-card">
            <h3>My HTML Projects</h3>
            <p>Different projects I used to practice HTML and CSS: including a dog website and an Apple website clone.</p>
            <button className="view_on_github_btn">
              <a href="https://github.com/hanT-spec/Html_projects.git" target="_blank" rel="noopener noreferrer">
                View on GitHub &gt;
              </a>
            </button>
          </div>

          <div className="project-card">
            <h3>Mini Supermarket Management System</h3>
            <p>A Java project to manage inventory and sales for a small supermarket.</p>
            <button className="view_on_github_btn">
              <a href="https://github.com/hanT-spec/Minisupermarket.git" target="_blank" rel="noopener noreferrer">
                View on GitHub &gt;
              </a>
            </button>
          </div>

          <div className="project-card">
            <h3>Task Manager</h3>
            <p>A simple task manager built with JavaScript for adding, editing, and deleting tasks.</p>
            <button className="view_on_github_btn">
              <a href="https://github.com/hanT-spec/Task-Manager.git" target="_blank" rel="noopener noreferrer">
                View on GitHub  &gt;
              </a>
            </button>
          </div>

          <div className="project-card pending">
            <h3>Upcoming Projects</h3>
            <p>🚧 Pending… Work in progress 🚧</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-wrapper" id="contact">
        <h2 className="title">Contact Me</h2>
        <p>Let’s connect!</p>

        <div className="contact-list">
          <div className="contact-item"><a href="mailto:hannatsegay525@gmail.com" target="_blank" rel="noopener noreferrer">📧 Email: hannatsegay525@gmail.com</a></div>
          <div className="contact-item"><a href="tel:+251993849775">📞 Call: +251 993849775</a></div>
          <div className="contact-item"><a href="https://www.linkedin.com/in/hanna-tsegay-8b7429331/" target="_blank" rel="noopener noreferrer">💼 LinkedIn: https://www.linkedin.com/in/hanna-tsegay-8b7429331/</a></div>
          <div className="contact-item"><a href="https://github.com/hanT-spec" target="_blank" rel="noopener noreferrer">💻 GitHub: https://github.com/hanT-spec</a></div>
        </div>

        <form className="contact-form">
          <p>Have any questions, advice or just want to say hi? Write it below:</p>
          <textarea placeholder="Write your message here..." rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Hanna Tsegay.</p>
        <p>“Live as if you were to die tomorrow. Learn as if you were to live forever.”</p>
        <p>— Mahatma Gandhi</p>
      </footer>
    </div>
  );
}


export default App;