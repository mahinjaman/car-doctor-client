import About from "../Components/Home/About";
import HeroSlider from "../Components/Home/HeroSlider";
import Services from "../Components/Home/Services/Services";

const Home = () => {
    return (
        <div>
            {/* Slider */}
            <HeroSlider></HeroSlider>

            {/* About US */}
            <About></About>

            {/* Services */}
            <Services></Services>
        </div>
    );
};

export default Home;