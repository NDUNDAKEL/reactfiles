import App from "./App"

const Header=({title})=>{
    return(
        <div>
            <h1>{title}</h1>
            <ul>
                
            </ul>
        </div>
    )
}
Header.defaultProps ={
title :"Hello there"
}
export default Header