import LeftSide from "./component/LeftSide";
import RightSide from "./component/RightSide";
import "./style/app.css"


const App =()=>{
    return (
       <div className="main-container">
            <LeftSide/>
            <RightSide/>
       </div>
)
}

export default App;