let experiences = [
    {
        timePeriode:"2024 - Present",
        titel:"Senior Frontend Engineer, Accessibility",
        designation:null,
        discription:"Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
        skills:["React","js","HTML","CSS"]
    },
    {
        timePeriode:"2024 - Present",
        titel:"Senior Frontend Engineer, Accessibility",
        designation:null,
        discription:"Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
        skills:["React","js","HTML","CSS"]
    },
    {
        timePeriode:"2024 - Present",
        titel:"Senior Frontend Engineer, Accessibility",
        designation:null,
        discription:"Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
        skills:["React","js","HTML","CSS"]
    },
    {
        timePeriode:"2024 - Present",
        titel:"Senior Frontend Engineer, Accessibility",
        designation:null,
        discription:"Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
        skills:["React","js","HTML","CSS"]
    }
]




const Experience=()=>{
    return (
        <div>
            {
                experiences.map((item)=>{
                    return (
                        <div className="experince-card">
                                <div className="timeperiode">{item.timePeriode}</div>
                                <div className="experince-detail">
                                    <h2>{item.titel}</h2>
                                    <p>{item.designation}</p>
                                    <p className="discription-text">{item.discription}</p>
                                    <div className="skill-chips">
                                        {
                                            item.skills.map((skill,index)=>{
                                                return (
                                                    <span key={index} className="chip">{skill}</span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Experience;  



