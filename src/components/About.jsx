import "./About.css";
function About(){
    return(
        <section className="section about" id="about">
            <div className="section about" id="about">
                <div className="about-main">
                <h2 className="section-title">About me</h2>
                <p className="about-text">
                    I'm a 3rd year B.Tech student at SHEAT College of Engineering,Varanasi.
                    I enjoy turning ideas into working website, and I've spent the last year 
                    building projects with the MERN stack.  
                </p>
                <a href="#" className="btn btn-primary" target="_blank" rel="noreferrer">Download resume</a>
                </div>
                <ul className="about-facts">
                <li>
                    <span className="fact-label">Location</span>
                    <span>Varanasi, India</span>
                </li>
                 <li>
                    <span className="fact-label">Email</span>
                    <a href="mailto:prasandeep822gmail.com">prasandeep822gmail.com</a>
                </li>
                <li>
                    <span className="fact-label">GitHub</span>
                    <a href="https://github.com" target="_blank" rel="noreferrer">github.com/sandeep1903-arch</a>
                </li>
                <li>
                    <span className="fact-label">linkedIn</span>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/Sandeep Prajapati</a>
                </li>
                </ul>
            </div>
        </section>
    );
}
export default About;