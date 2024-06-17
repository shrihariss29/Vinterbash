import Carousel from 'react-bootstrap/Carousel';


function Home()
{
    return <div class='totalhome'>
             <div className='sponsor'>
                <img src={require("../assets/Sponsor.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsor.jpg")} alt="Sponsor"/>
                <img src={require("../assets/Sponsor.jpg")} alt="Sponsor"/>
             </div>
             <div id='homepage'>
             <h1 id='Vinter'>V I N T E R B A S H</h1>
             <h3 id='theme'>Where Champions Rise</h3>
             <a className='btn btn-primary' href="/events">Go to registration page</a>
             </div>  
      <Carousel className='carousel' interval={4000} wrap={true}>
        {[1, 2, 3, 4,5,6,7].map((index) => (
          <Carousel.Item key={index}>
            <img className="carouselimg" src={require(`../assets/pic${index}.jpg`)} alt={`My pics in navbar ${index}`} />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
            <div >
            <h2 className='hometitle'>About our event and Motto</h2>
            <p className='homeabout'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ac feugiat sed lectus vestibulum mattis ullamcorper. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
            Facilisis sed odio morbi quis commodo odio aenean sed. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. 
            Eu feugiat pretium nibh ipsum consequat. Ut consequat semper viverra nam libero justo laoreet sit. 
            Tristique et egestas quis ipsum suspendisse.Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Eleifend quam adipiscing vitae proin.
            </p>
             </div>
      </div>
}
export default Home;
