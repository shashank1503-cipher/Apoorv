import Navbar from "@/components/Navbar"
import EventIntro from "@/components/EventsList/EventIntro";
import EventListContainer from "@/components/EventsList/EventListContainer";
import Footer from "@/components/Footer";


const Events = () => {
    return (
        <>
            <Navbar />
            <EventIntro />
            <EventListContainer />
            <Footer />
        </>
    )
}

export default Events