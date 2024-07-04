import Hero from "../components/Hero/Hero"
import NavBar from "../components/NavBar/NavBar"
import PopularDestinations from "../components/PopularDestinations/PopularDestinations"

export default function Home() {
    const items = [{ icon: "fa-solid fa-house-user", text: "Home", link: "/" },
        { icon: "fa-solid fa-circle-info", text: "About", link: "/about" },
        { icon: "fa-solid fa-briefcase", text: "Service", link: "/services" },
        { icon: "fa-solid fa-address-book", text: "Contact", link: "/contact" }
        ]
    return (
        <>
            <NavBar logo="Trippy" navItems={items} btn="sign up" />
            <Hero img="/assets/img/heroBg.jpg" title="Your Journey Your Story" desc="Choose Your Favourite Destination." btn={{ show: true, content: "Travel Now" }} />
            <PopularDestinations />
        </>
    )
}
