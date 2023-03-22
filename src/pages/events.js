import Navbar from "@/components/Navbar"
import EventIntro from "@/components/EventsList/EventIntro";
import EventListContainer from "@/components/EventsList/EventListContainer";
import Footer from "@/components/Footer";
import { ParallaxProvider } from 'react-scroll-parallax';


const Events = () => {
    return (
        <ParallaxProvider>
            <Navbar isTransparent={true} logoHide={true}/>
            <EventIntro />
            <EventListContainer />
            <Footer />
        </ParallaxProvider>
    )
}

export default Events