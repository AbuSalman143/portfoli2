import ProjectImage from "../images/project.jpg"

let projects=[
    {
        image:ProjectImage,
        title:"Build a Spotify Connected",
        discription:"Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
        tag:["React","js","HTML","CSS"]
    },
    {
        image:ProjectImage,
        title:"Build a Spotify Connected",
        discription:"Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
        tag:["React","js","HTML","CSS"]
    },
    {
        image:ProjectImage,
        title:"Build a Spotify Connected",
        discription:"Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
        tag:["React","js","HTML","CSS"]
    },
    {
        image:ProjectImage,
        title:"Build a Spotify Connected",
        discription:"Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
        tag:["React","js","HTML","CSS"]
    },
    {
        image:ProjectImage,
        title:"Build a Spotify Connected",
        discription:"Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
        tag:["React","js","HTML","CSS"]
    },
]


const Project=()=>{
    return (
        <div className="project-container">
            {
                projects.map((item)=>{
                    return(
                        <div className="project-card">
                            <div className="img">
                                <img src={item.image}/>
                            </div>
                            <div className="project-details">
                                <h2>{item.title}</h2>
                                <p className="project-discription">{item.discription}</p>
                                <div className="project-chips">
                                    {item.tag.map(tag=>{
                                        return (
                                            <span className="chip">{tag}</span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
    
}


export default Project;