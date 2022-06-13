import '../styles/Home.css'
import {useState, useEffect} from 'react'
import '../styles/About.css'
const URL = "https://intense-bastion-62185.herokuapp.com/";
function Home(props){
    const [projects, setProjects] = useState(null);
    const [about, setAbout] = useState(null);

    async function getAboutData(){
        const response = await fetch(URL + 'about');
        const data = await response.json(); 
        setAbout(data);
    }
    async function getProjectsData(){
        const response = await fetch(URL + 'projects')
        const data = await response.json();
        setProjects(data)
    }
    
    useEffect(() =>{
        getProjectsData()
        getAboutData()
    }, [])
    const loaded = () => {
        console.log(URL)
        const projectCards = projects.map((project) => {
            return(
            <div className='project-card'>
                <h4>{project.name}</h4>
                <img className='project-image' src={project.image}></img>
                <div className='project-links'>
                    <a href={project.live}><button className="small-styled-button">Live</button></a>
                    <a href={project.git}><button className="small-styled-button">Github</button></a>
                </div>
            </div>
            )
        })
        return (
            <div className='Home'>
                <div id="about" className='About'>
                    <h2 >Hi, I'm {about.name.split(' ')[0]}</h2>
                    <div className='image-container'>
                        <img className='about-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdAXnmccs6A41HPzfdT9hy1L21Kx6tXtehGLr1pyZzYg&s"></img>
                        <img className='about-image' src="https://spectator.cuchicago.edu/wp-content/uploads/2021/12/JeremyLozada_BatknightsPhoto-900x600.jpg"></img>
                    </div>
                    <p className='brand-statement'>{about.bio}</p>
                    <div className='button-container'>
                        <a href={`mailto:${about.email}`}>
                            <button className="styled-button" id="contact-me-button">CONTACT ME</button>
                        </a>
                        <a target="_blank" href="https://docs.google.com/document/d/1X3HN7bSO1SoFiKozQGCxZ896yPlZEATl/view">
                            <button className="styled-button" id="resume-button">VIEW RESUME</button>
                        </a>
                    </div>
                </div>
                <div id='Skills'>
                    <h2 style={{color: "red"}}>Skills</h2>
                    <div id="container">
                        <div id="stage">
                        <div id="shape" class="ring backfaces">
                            <div class="plane one">Python</div>
                            <div class="plane two">MongoDB</div>
                            <div class="plane three">Express</div>
                            <div class="plane four">CSS</div>
                            <div class="plane five">HTML</div>
                            <div class="plane six">React</div>
                            <div class="plane seven">SQL</div>
                            <div class="plane eight">Node</div>
                            <div class="plane nine">Javascript</div>
                            <div class="plane ten">C++</div>
                            <div class="plane eleven">Django</div>
                            <div class="plane twelve">Googling</div>
                        </div>
                        </div>
                    </div>
                </div>
                <h2 style={{color : 'red'}}>Projects</h2>
                <div id="projects" className='project-container'>
                    {projectCards}
                </div>
               
            </div>
        )

    }
    return projects && about ? loaded(): <h2>loading...</h2>
}
export default Home