

let menu=["ABOUT","EXPERIENCE" ,"PROJECT"]


const Menu=()=>{
    return (
        <ul>
            {menu.map((item,index)=>{
                return(
                    <li key={index}><div className="menu-list"></div>{item}</li>
                )
            })}
        </ul>
    )
}

export default Menu