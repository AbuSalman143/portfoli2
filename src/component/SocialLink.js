import linkdin from "../images/link-removebg-preview.png"
import instagram from "../images/insta-removebg-preview.png"
import github from "../images/github-removebg-preview.png"
import x from "../images/x.png"

let socialIcon=[
    {
        img:github
    },
    {
        img:linkdin
    },
    {
        img:instagram
    },
    {
        img:x
    },
]


const Social=()=>{
    return (
        <div className="social-container">
            {socialIcon.map((item,index)=>{
                return (
                    <a key={index} href="#"><img src={item.img}/></a>
                )
            })}
        </div>
    )
}

export default Social