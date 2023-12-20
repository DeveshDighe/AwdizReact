import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Home(){

    const router = useNavigate();
    return (
        <div>Home Page

            <div id="Log">
            <a href="/Login">Login page</a>
            </div>

            <div id="Reg">
                <a href="/Register">Register Page</a>
            </div>

            <p onClick={()=>router('/user/anil')}>For Anil page</p>
            <p onClick={()=>router('/user/ramesh')}>For ramesh page</p>
        
        </div>
    )
}

export default Home;