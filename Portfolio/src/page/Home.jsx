import About from "../components/About"
import Intro from "../components/Intro"
import Navbar from "../components/Navbar"

const Home = ()=>{
    return (
        <div className="homeContainer">
            <Navbar/>
            <Intro/>
            <About/>
        </div>
    )
}

export default Home