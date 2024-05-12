import About from "./About";
import Experience from "./Experience";
import Resume from "./Resume";
import Project from "./Project";


const RightSide=()=>{
    return (
        <div className="right-container">
            <About/>
            <Experience/>
            <Resume/>
            <Project/>
        </div>
    )
}

export default RightSide;