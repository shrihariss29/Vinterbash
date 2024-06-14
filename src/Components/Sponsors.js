function Contact()
{
    const ContactCard = ({orgname,designation,number,image}) => {
            return(
            <div className="contact-card">
            <h2>{orgname}</h2>
            <p>{designation}</p>
            <p>{number}</p>
          </div>
      );
    }
    return <div>
         <h1 className="Leaderboard">Our organizers are just a call away!</h1>
         <div className="contactgrid">

        <ContactCard orgname="Organizer" designation="Overall Event Coordinator" number="9123456789"/>
        <ContactCard orgname="Organizer" designation="Logistics Manager" number="9234567890" />
        <ContactCard orgname = "Organizer" designation= "Overall Technical Coordinator" number = "8220532903"/>
        <ContactCard orgname="Organizer" designation="Content Writer" number="9345678901" />
        <ContactCard orgname="Organizer" designation="Overall Media Coordinator" number="9456789012"/>
        <ContactCard orgname="Organizer" designation="Dance event" number="9567890123" />
        <ContactCard orgname="Organizer" designation="singing event" number="9678901234" />
        <ContactCard orgname="Organizer" designation="Drama event" number="9789012345" />
        <ContactCard orgname="Organizer" designation="Spoof event" number="9890123456" />

        </div>
    </div>
}
export default Contact;
