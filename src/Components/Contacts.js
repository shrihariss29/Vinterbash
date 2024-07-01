function Contact()
{
    const ContactCard = ({orgname,designation,number}) => {
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
        <ContactCard orgname="Anirudh" designation="'What if?' Odyssey" number="86101 03593"/>
        <ContactCard orgname="Sayee Shivaani" designation="Think On Your Feet" number="99407 55950" />
        <ContactCard orgname="Srinivasa Raghavan" designation= "The Triquizzard Tournament" number = "88254 08754"/>
        <ContactCard orgname="Sanjay Balaji" designation=" Itihasas Quiz" number="81487 26890" />
        <ContactCard orgname="Niranjana" designation="மொழியமுதம்(Mozhiyamudham)" number="80566 21347"/>
        <ContactCard orgname="Neeraja" designation="Cartoon Verse Crossover" number="97893 13057" />
        <ContactCard orgname="Charuprabha" designation="Multi Media Madness" number="94456 53091" />
        <ContactCard orgname="Shruthi" designation="Nalamdhaanaa?!" number="99430 26001" />
        <ContactCard orgname="Dhixitha" designation="Five.Six.Seven.Eight.." number="63810 66216" />
        <ContactCard orgname="Jayavarshini" designation="Heels In The Sky" number="93457 58850"/>
        <ContactCard orgname="Subhashree" designation="The Imitation Game - Improv" number="96006 72110" />
        <ContactCard orgname="Jay" designation= "Aaathi, Idhu Adhula?! - Spoof Show" number = "90874 76555"/>
        <ContactCard orgname="Srivasthan" designation="Thirai@480°" number="70101 84600" />
        <ContactCard orgname="Ekanath" designation="Chordially Yours" number="80157 64279"/>
        <ContactCard orgname="Ekanath" designation="Acoustic Nirvana" number="80157 64279" />
        <ContactCard orgname="Arun Meyyappan" designation="Python Prowess Quest " number="90426 49000" />
        <ContactCard orgname="Kishanth" designation="Vinter Kick-Off : 5-A Side Football" number="75988 58465" />
        <ContactCard orgname="Acchudan" designation="Vinter Bowl-out : Turf Cricket" number="93614 97517" />
        </div>
        <h1 className="Contact">Overall Coordinators :</h1>
        <div className="contactgrid">
        <ContactCard orgname="Srivasthan" designation="Overall Coordinator" number="70101 84600" />
        <ContactCard orgname="Harini Ishwarya" designation="Overall Coordinator" number="94891 89598" />
        <ContactCard orgname="Amruthavarshan" designation="Overall Coordinator" number="70100 89170" />
        </div>
        <h1 className="Contact">Technical Coordinators :</h1>
        <div className="contactgrid">
        <ContactCard orgname="Shrihari" designation="Technical Coordinator" number="82205 32903" />
        <ContactCard orgname="Jayavanth" designation="Technical Coordinator" number="90808 32022"/>
        </div>
    </div>
}
export default Contact;
