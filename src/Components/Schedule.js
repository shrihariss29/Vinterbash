import React from 'react';

function Schedule() {
  const ScheduleCard = (title, subtitle, type, time, venue, imgSrc) => {
    return (
      <div className="schedulecard">
        <img src={require(`../assets/${imgSrc}`)} alt={title} />
        <div>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <h4>Type : {type}</h4>
          <h4>Time : {time}</h4>
          <h4>Venue : {venue}</h4>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 className="Leaderboard">Schedule</h1>
      <div className="scheduleflex">
        {ScheduleCard('Art','Multi media madness','One shot event','10:00 am to 01:00 pm','To be announced','art.jpg')}
        {ScheduleCard('Art','Cartoon Universe Crossover','One shot event','02:00 pm to 05:00 pm','To be announced','art.jpg')}
        {ScheduleCard('Cinema','Thirai @480°','Finals','Will be announced on the event day','To be announced','cinema.jpg')}
        {ScheduleCard('Dance','Heels in the sky','Two phased event','9:30 am to 11:00 am (Prelims), 5:00 pm to 06:00pm (Finals) ','To be announced for both Prelims and Finals','dance.jpg')}
        {ScheduleCard('Dance','Nalamdhaana','One shot event','11:30 am to 01:30 pm','To be announced','dance.jpg')}
        {ScheduleCard('Dance','Five,Six,Seven,Eight','One shot event','02:00 pm to 04:30 pm','To be announced','dance.jpg')}
        {ScheduleCard('Dramatics','The imitation game','Two Phased Event','11:00 am to 12 noon (Prelims), 02:00 pm to 04:00 pm (Finals)','To be announced for Prelims and Finals','drama.jpg')}
        {ScheduleCard('Dramatics','Aathi, idhu adhulla','One shot event','11:30 am to 01:30 pm','To be announced','drama.jpg')}
        {ScheduleCard('English literature','"What if" Odyssey','One shot event','10:00 am to 12 noon','To be announced','elits.jpg')}
        {ScheduleCard('English literature','Think on your Feet','Two phased event','02:00 pm to 03:00 pm (Prelims), 03:30 pm to 05:30 pm (Finals)','To be announced for both Prelims and Finals','elits.jpg')}
        {ScheduleCard('Music','Chordially Yours : group music','One shot event','9:30 am to 11:30 am','To be announced','music.jpg')}
        {ScheduleCard('Music','Acoustic Nirvana','One shot event','2:00 pm to 4:00 pm','To be announced','music.jpg')}
        {ScheduleCard('Quiz','The Triquizzard Tournament','Two phased event','9:30 am to 10:30 am (Prelims), 11:30 am to 01:30 pm (Finals)','To be announced for both Prelims and Finals','quiz.jpg')}
        {ScheduleCard('Quiz','Ithihaas Quiz','Two phased event','02:00 pm to 03:00 pm (Prelims), 03:30 pm to 05:30 pm  (Finals)','To be announced for both Prelims and Finals','quiz.jpg')}
        {ScheduleCard('Sports','Vinter bowl-out (Cricket)','Group stages','9:00 am to 6:00 pm','To be announced','sport.jpg')}
        {ScheduleCard('Sports','Vinter kick-off (Football)','Group stages','9:00 am to 6:00 pm','To be announced','sport.jpg')}
        {ScheduleCard('தமிழ் இலக்கியம்','மொழியமுதம் ','Two phased event','11:30 am to 01:00 pm (Prelims), 02:30 pm to 04:30 pm (Finals)','To be announced for Prelims and Finals','tamillits.jpg')}
        {ScheduleCard('Tech','Python prowess quest','Two phased event','10:00 am to 11:00 am (Prelims), 02:00 pm to 04:00 pm (Finals)','To be announced for both Prelims and Finals','tech.jpg')}
        {ScheduleCard('Title event','Ms/Mr Vinterbash','Finals','03:30 pm onwards','To be announced','eventvinterlogo.jpg')}
      </div>
    </div>
  );
}

export default Schedule;
