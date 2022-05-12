import {useState, useEffect} from 'react';

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
        <div>
            <h2>{about.name}</h2>
            <h2>{about.email}</h2>
            <h2>{about.bio}</h2>
        </div>
    )}
    return about ? loaded() : <h1>Loading... </h1>
}
export default About;