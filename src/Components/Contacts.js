function Contact()
{
    const ContactCard = ({orgname,designation,number,image}) => {
      return(
      <div class="contact-card">
          <img src= {image} alt="Contact"/>
          <div className="contact-details">
            <h2>{orgname}</h2>
            <p>{designation}</p>
            <p>{number}</p>
          </div>
          </div>
      );
    }
    return <div>
         <h1 className="Leaderboard">Our organizers are just a call away!</h1>
         <div className="contactgrid">

        <ContactCard orgname="Vasthan" designation="Overall Event Coordinator" number="9123456789" image="https://via.placeholder.com/80"/>
        <ContactCard orgname="Amirthu" designation="Logistics Manager" number="9234567890" image="https://via.placeholder.com/80" />
        <ContactCard orgname = "Shrihari" designation= "Technical support" number = "8220532903" image = "https://via.placeholder.com/80"/>
        <ContactCard orgname="Kaavia" designation="Content Writer" number="9345678901" image="https://via.placeholder.com/80" />
        <ContactCard orgname="Jayavanth" designation="Technical Support" number="9456789012" image="https://via.placeholder.com/80"/>
        <ContactCard orgname="Peru therla" designation="Dance event" number="9567890123" image="https://via.placeholder.com/80" />
        <ContactCard orgname="Peru therla" designation="Edho oru event" number="9678901234" image="https://via.placeholder.com/80" />
        <ContactCard orgname="Peru therla" designation="Edho oru event" number="9789012345" image="https://via.placeholder.com/80" />
        <ContactCard orgname="Peru therla" designation="Edho oru event" number="9890123456" image="https://via.placeholder.com/80" />

        </div>
    </div>
}
export default Contact;