import Carousel from "react-bootstrap/Carousel";
function Home() {
  return (
    <div class="totalhome">
      <div className="sponsor">
        <img src={require("../assets/Sponsor.jpg")} alt="Sponsor" />
        <img src={require("../assets/Sponsor.jpg")} alt="Sponsor" />
        <img src={require("../assets/Sponsor.jpg")} alt="Sponsor" />
      </div>
      <div id="homepage">
        <h1 id="Vinter">V I N T E R B A S H</h1>
        <h3 id="theme">WHERE CHAMPIONS RISE!</h3>
        <a className="btn btn-primary" href="/events">
          Go to registration page
        </a>
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
        <h2 className="hometitle">About our event and Motto</h2>
        <p className="homeabout">
        With the blessings of the Almighty, the Old Students Association of Sri Vageesha Vidhyashram has been successfully conducting 
        “Vinterbash” – our flagship interschool competition which showcases the best and brightest minds from various schools in Trichy 
        for the past three years.Join us to witness young minds unleash their creativity, skill, and strategy in a series of competitive
        events ranging from riveting debates, dazzling performances, cheery worthy goals, and intriguing intellect, as the fourth edition
        of Vinterbash is just around the corner – an event ‘where champions rise.’ Registrations are now open.
        Mark your calendars for July 27 as we welcome you all to ignite dreams and define victories with us!
        </p>
      </div>
    </div>
  );
}
export default Home;
