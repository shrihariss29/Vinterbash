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
         <h1 className="Contacttext">Our organizers are just a call away!</h1>
         <h1 className="Contact">Event Organizers : </h1>
         <div className="contactgrid">
        <ContactCard orgname="Anirudh" designation="'What if?' Odyssey" number="9123456789"/>
        <ContactCard orgname="Sayee Shivani" designation="Think On Your Feet" number="9234567890" />
        <ContactCard orgname="Srinivasa Raghavan" designation= "The Triquizzard Tournament" number = "8220532903"/>
        <ContactCard orgname="Sanjay Balaji" designation=" Itihasas Quiz" number="9345678901" />
        <ContactCard orgname="Niranjana" designation="மொழியமுதம் (Mozhiyamudham)" number="9456789012"/>
        <ContactCard orgname="Neeraja" designation="Cartoon Verse Crossover" number="9567890123" />
        <ContactCard orgname="Charuprabha" designation="Multi Media Madness" number="9678901234" />
        <ContactCard orgname="Shruthi" designation="Nalamdhaanaa?!" number="9789012345" />
        <ContactCard orgname="Dhixitha" designation="Five.Six.Seven.Eight.." number="9890123456" />
        <ContactCard orgname="Jayavarshini" designation="Heels In The Sky" number="9123456789"/>
        <ContactCard orgname="Subhashree" designation="The Imitation Game - Improv" number="9234567890" />
        <ContactCard orgname="Jay" designation= "Aaathi, Idhu Adhula?! - Spoof Show" number = "8220532903"/>
        <ContactCard orgname="Srivasthan" designation="Thirai@480°" number="9345678901" />
        <ContactCard orgname="Ekanath" designation="Chordially Yours" number="9456789012"/>
        <ContactCard orgname="Ekanath" designation="Acoustic Nirvana" number="9567890123" />
        <ContactCard orgname="Arun Meyyappan" designation="Python Prowess Quest " number="9678901234" />
        <ContactCard orgname="Kishanth" designation="Vinter Kick-Off : 5-A Side Football" number="9789012345" />
        <ContactCard orgname="Acchudhan" designation="Vinter Bowl-out : Turf Cricket" number="9890123456" />
        </div>
        <h1 className="Contact">Overall Co-Ordinators :</h1>
        <div className="contactgrid">
        <ContactCard orgname="Jay" designation="Overall Co-Ordinator" number="9345678901" />
        <ContactCard orgname="Kishanth" designation="Overall Co-Ordinator" number="9456789012"/>
        <ContactCard orgname="Harini Ishwarya" designation="Overall Co-Ordinator" number="9567890123" />
        <ContactCard orgname="Srivasthan" designation="Overall Co-Ordinator" number="9678901234" />
        <ContactCard orgname="Amruthavarshan" designation="Overall Co-Ordinator" number="9789012345" />
        </div>
        <h1 className="Contact">Technical Co-Ordinators :</h1>
        <div className="contactgrid">
        <ContactCard orgname="Shrihari" designation="Overall Co-Ordinator" number="9345678901" />
        <ContactCard orgname="Jayavanth" designation="Overall Co-Ordinator" number="9456789012"/>
        </div>
    </div>
}
export default Contact;
