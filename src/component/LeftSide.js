import ProfileImage from "./ProfileImage";
import Profile from "./Profile";
import Menu from "./Menu";
import Social from "./SocialLink";



const LeftSide=()=>{
    return (
        <div className="left-container">
            <div className="left-card">
            <div className="profile">
                <ProfileImage/>
                <Profile/>
            </div>
            <Menu/>
            <Social/>
            </div>
            
        </div>
    )
}


export default LeftSide;