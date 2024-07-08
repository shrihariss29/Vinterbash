import Carousel from "react-bootstrap/Carousel";
function Home() {
  return (
    <div class="totalhome">
      <div id="homepage">
        <h1 id="Vinter">V I N T E R B A S H</h1>
        <h3 id="theme">WHERE CHAMPIONS RISE!</h3>
        <a className="btn btn-primary" href="/events">
          Go to registration page
        </a>
        <h3 className="lastdate">(Last date to register - July 23rd 2024, 11:59 pm)</h3>
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
        <h2 className="hometitle">About our Event and Motto</h2>
        <p className="homeabout">
        With the blessings of the Almighty, the Old Students Association of Sri Vageesha Vidhyashram has been successfully conducting 
        “Vinterbash” – our flagship interschool competition which showcases the best and brightest minds from various schools in Trichy 
        for the past three years.Join us to witness young minds unleash their creativity, skill, and strategy in a series of competitive
        events ranging from riveting debates, dazzling performances, cheery worthy goals, and intriguing intellect, as the fourth edition
        of Vinterbash is just around the corner – an event ‘where champions rise.’ Registrations are now open.
        Mark your calendars for July 27 as we welcome you all to ignite dreams and define victories with us!
        </p>
      </div>
      <div className='homesabout'>
            <h2>We thank our sponsors!</h2>
            <p>We wholeheartedly extend our gratitude to our sponsors who have been our pillar of strength in making Vinterbash a grand
            success. As we celebrate the achievements and growth of the students across various extracurricular and co-curricular events,
            your unwavering support and belief in our vision has empowered us to create an unforgettable experience for students, teachers,
            and organizers alike. Thank you once again for being an integral part of Vinterbash 2024. Your partnership continues to make a 
            profound impact on our community and beyond.</p>
             </div>
    </div>
  );
}
export default Home;
