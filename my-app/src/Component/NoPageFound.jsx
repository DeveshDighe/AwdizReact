import '../Styles/NoPageFound.css'
import {useNavigate} from 'react-router-dom'


function NoPageFound(){
    const router = useNavigate();
    setInterval(() => {
        router('/')
    }, 3000);
    return(
        <div>
            <h1>No page Found</h1>
            <p onClick={() =>router ('/')}>Go to home page</p>
            <p className='Redirecting' >ReDirecting To Home Page in 3 Seconds</p>
            </div>
    )
}


export default NoPageFound;