import Intro from "../components/Intro"
import Navbar from "../components/Navbar"

const Home = ()=>{
    return (
        <div className="homeContainer">
            <Navbar/>
            <Intro/>
        </div>
    )
}

export default Home