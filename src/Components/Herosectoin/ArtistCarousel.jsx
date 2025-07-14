import { Carousel } from "react-bootstrap";
import { FaTwitter, FaExternalLinkAlt } from "react-icons/fa";
import pms from "../../assets/Artists/psm.png";
import lj from "../../assets/Artists/lj.png";
import mb from "../../assets/Artists/mb.png";
import mh from "../../assets/Artists/mh.png";
import bg from "../../assets/djbg.jpg";

const artists = [
    {
        name: " Pradyumna Singh Manot",
        description:
            "Pradyumna Singh Manot a.k.a. Paddy, is a fiery Latin Jazz Pianist, composer and music educator from India.He is Founder, Director of Music Studies, Prime Mentor and Head of Departments of Piano, Jazz and Blues at 12 Keys.Pradyumna started studying the piano at the age of 6. He studied Western Classical Music for 12 years and also studied tabla.Pradyumna started his journey in the study of Jazz music at the age of 18 and at 24 became a student of the late Madhav Chari for 8 unnr Ha has sinen narfarmad avtanriualu with Aci Bertoncelj\" International Piano Competition, Slovenia, 1st Prize in \"Section A\" Chopin Piano...",
        image: pms,
        tag: "FEATURED ARTIST",
        twitter: "https://x.com/",
        link: "#",
    },
    {
        name: " Luke Jones",
        description:
            "A Welsh pianist, Luke Jones started playing the piano at the age of 5 and made his debut recital at Oriel Wrecsam aged 10. Since then he has performed all over Britain at important venues and has won prizes in competitions around Europe notably 2nd Prize and Mompou Prize at the prestigious Maria Canals International Piano Competition, 1st Prize at the Bromsgrove International Musicians Competition, 1st Prize in 'Aci Bertoncelj' International Piano Competition Claunnin 1rt Drizn in 'Cartinn A' Chanin Dam",
        image: lj,
        tag: "FEATURED ARTIST",
        twitter: "https://x.com/",
        link: "#",
    },
    {
        name: " Marouan Benabdallah",
        description:
            "Acclaimed pianist Marouan Benabdallah is indisputably the leading representative of his native Morocco on the international concert stage, having recently performed on stages such as Carnegie Hall's Zankel Hall, the Kennedy Center, the Teatro Colon in Buenos Aires, the Amsterdam Concertgebouw, the Berlin Konzerthaus with the Budapest Festival Orchestra and Ivan Fischer and the Castleton Symphony orchestra under the baton of Lorin Maazel.",
        image: mb,
        tag: "FEATURED ARTIST",
        twitter: "https://x.com/",
        link: "#",
    },
    {
        name: " Monika Herzig",
        description:
            "Monika Herzig is an accomplished jazz musician teaching courses on the Music Industry and Arts Entrepreneurship in O'Neill's Arts Management program. Originally from Germany, Herzig came to the United States on a scholarship exchange program at the University of Alabama where she earned her master's degree in music education. She has toured internationally with her band Beeblebrox, opening for Tower of Power, Bette Midler, Yes, Sting, the Dixie Dregs, and more. By 1007 Harin had samnlatad har nME in Muris",
        image: mh,
        tag: "FEATURED ARTIST",
        twitter: "https://x.com/",
        link: "#",
    },
    // Repeat for multiple entries...
];

const ArtistCarousel = () => {
    return (
        <div className="container-fluid bg-dark text-white py-5" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="row txtS1 mb-5">
                            <h1>Featured artists (2021)</h1>
                            <hr style={{width: "30%", borderTopWidth: 4, borderColor: "white"}}/>
                        </div>
                        <Carousel indicators={true} interval={3000} controls={false} fade>
                            {artists.map((artist, index) => (
                                <Carousel.Item key={index}>
                                    <div className="row" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                                        <div className="col-md-4 px-0">
                                            <img
                                                className="img-fluid"
                                                src={artist.image}
                                                alt={artist.name}
                                                style={{ objectFit: "cover", height: "100%" }}
                                            />
                                            <span className="position-absolute bottom-0 start-0 mb-4 px-3 py-2 text-light fw-bold fs-6 shadow bg1">
                                                {artist.tag}
                                            </span>
                                        </div>
                                        <div className="col-md-8 p-5 text-light">
                                            <div style={{ maxHeight: "auto", overflowY: "auto" }}>
                                                <h2 className="fw-bold">{artist.name}</h2>
                                                <p className="fs-5">{artist.description}</p>
                                            </div>
                                            <div className="mt-3">
                                                <a href={artist.link} className="me-3 txt1"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <FaExternalLinkAlt size={20} className="shadow" />
                                                </a>
                                                <a href={artist.twitter} className="txt1"
                                                    target="_blank" rel="noreferrer">
                                                    <FaTwitter size={25} className="ms-3 shadow" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    );
};

export default ArtistCarousel;
