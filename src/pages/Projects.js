import {useEffect, useState} from 'react'

function Projects(props){
    const [projects, setProjects] = useState(null);
    
    async function getProjectsData(){
        const response = await fetch(props.URL + 'projects')
        const data = await response.json();
        setProjects(data)
    }
    
    useEffect(() =>{
        getProjectsData()
    }, [])

    function loaded(){
        const projectsElements = projects.map((project) => {
            return <div>
                <h1>{project.name}</h1>
                <img src={project.image} />
                <a href={project.git} target="_blank">
                <button>Github</button>
                </a>
                <a href={project.live} target="_blank">
                <button>live site</button>
                </a>
            </div> 

        })
        return projectsElements
    }

    return projects ? loaded() : <h1>loading...</h1>
}
export default Projects