import Carousel from "react-bootstrap/Carousel";
function Home() {
  return (
    <div class="totalhome">
      <div id="homepage">
        <h1 id="Vinter">V I N T E R B A S H</h1>
        <h3 id="theme">WHERE CHAMPIONS RISE!</h3>
      </div>
      <h2 className="hometitle">Our OSA Thanks you!</h2>
        <p className="homeabout">
        We extend our heartfelt gratitude to all stakeholders who contributed to the resounding success of Vinterbash 2024. We appreciate the enthusiastic participation of school management, representative teachers, and students, who all responded with remarkable zeal. Our sincere thanks also go to our esteemed alumni, who organized the event with seamless efficiency. Lastly, we are indebted to the management of Sri Vageesha Vidhyashram for their unwavering support and encouragement throughout. We look forward to nurturing and strengthening these bonds in future editions of Vinterbash.
        </p>
      <div class='Thanks'>
      <div className="websitepeople">
      <h1 class='team'>Team behind this website : </h1>
      <a className="orgcre btn btn-primary" href="https://www.instagram.com/shrihari.29/" target="_blank" rel="noreferrer">Shrihari.S - Web Developer</a>
      <a className="orgcre btn btn-primary" href="https://www.instagram.com/kaavia_nagarajan/" target="_blank" rel="noreferrer">Kaavia.N - COontent writer</a>
      <a className="orgcre btn btn-primary" href="https://www.instagram.com/sabari30_messi/" target="_blank" rel="noreferrer">Sabarigirsan - Events logo</a>
      </div>
      <div className="websitepeople">
      <h1 class='team'>Special thanks to :</h1>
      <a className="orgcre btn btn-primary" href="https://www.instagram.com/p.srinivasaraghavan/" target="_blank" rel="noreferrer">Srinivasa Raghavan.P</a>
      <a className="orgcre btn btn-primary" href="https://www.instagram.com/aint._vasthan/" target="_blank" rel="noreferrer">Srivasthan</a>
      <a className="orgcre btn btn-primary" href="https://www.instagram.com/amruthavarshan.a.s/" target="_blank" rel="noreferrer">Amrutha Varshan</a>
      </div>
      </div>
      <Carousel className="carousel" interval={4000} wrap={true}>
        {[1, 2, 3, 4, 5, 6, 7].map((index) => (
          <Carousel.Item key={index}>
            <img
              className="carouselimg"
              src={require(`../assets/pic${index}.jpg`)}
              alt={`My pics in navbar ${index}`}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div>
        
      </div>
      <div className='homesabout'>

            <h2>We thank our sponsors !</h2>
            <p>We wholeheartedly extend our gratitude to our sponsors who have been our pillar of strength in making Vinterbash a grand
            success. As we celebrate the achievements and growth of the students across various extracurricular and co-curricular events,
            your unwavering support and belief in our vision has empowered us to create an unforgettable experience for students, teachers,
            and organizers alike. Thank you once again for being an integral part of Vinterbash 2024. Your partnership continues to make a 
            profound impact on our community and beyond.</p>
            <div className="sponsorgrid">
                <img src={require("../assets/Sponsors/karurvysyabank.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/madappalli.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/uolo.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/crysalis.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/orius.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/extramarks.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/trichybookhouse.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/scribbles.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/neverskip.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/Indianbank.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/srikrishnastudio.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/sribalaji.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/bksecurity.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/ultrasystems.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/grt.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/cloudreign.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/janarthansystems.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsors/feathers.jpg")} alt="Sponsor"/>
            </div>
            </div>
    </div>
  );
}
export default Home;
