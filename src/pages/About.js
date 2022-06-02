import {useState, useEffect} from 'react';
import '../styles/About.css'
function About(props){
    const [about, setAbout] = useState(null);

    async function getAboutData(){
        const response = await fetch(props.URL + 'about');
        const data = await response.json(); 
        setAbout(data);
    }
    useEffect(() => {
        getAboutData();
    }, []);


    function loaded(){ 
        console.log(about)
        return (
        <div className='About'>
            <h2>Hello, I'm {about.name}</h2>
            <div className='image-container'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdAXnmccs6A41HPzfdT9hy1L21Kx6tXtehGLr1pyZzYg&s"></img>
                <img src="https://spectator.cuchicago.edu/wp-content/uploads/2021/12/JeremyLozada_BatknightsPhoto-900x600.jpg"></img>
            </div>
            <h2>{about.email}</h2>
            <h2>{about.bio}</h2>
            <a href={`mailto:${about.email}`}>
                <button id="contact_me_button">Contact Me</button>
            </a>
        </div>
    )}
    return about ? loaded() : <h1>Loading... </h1>
}
export default About;