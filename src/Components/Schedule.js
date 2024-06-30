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
        {ScheduleCard('Music','Chordially Yours : group music','Single shot event','9:30 am to 11:30 am','To be announced','music.jpg')}
        {ScheduleCard('Dance','Heels in the sky','Prelims','9:30 am to 11:00 am','To be announced','dance.jpg')}
        {ScheduleCard('Quiz',' Triquizzard tournament','Prelims','9:30 am to 10:30 am','To be announced','quiz.jpg')}
        {ScheduleCard('Art','Multi media madness','Single shot event','10:00 am to 01:00 pm','To be announced','art.jpg')}
        {ScheduleCard('English literature','"What if" Odyssey','Single shot event','10:00 am to 12 noon','To be announced','elits.jpg')}
        {ScheduleCard('Tech','Python prowess quiz','Prelims','10:00 am to 11:00 am','To be announced','quiz.jpg')}
        {ScheduleCard('Dramatics','The imitation game','Prelims','11:00 am to 12 noon','To be announced','drama.jpg')}
        {ScheduleCard('தமிழ் இலக்கியம்','மொழியமுதம் ','Prelims/தகுதிச்சுற்று','11:30 am to 01:00 pm','To be announced','tamillits.jpg')}
        {ScheduleCard('Dance','Nalamdhaana','Single shot event','11:30 am to 01:30 pm','To be announced','dance.jpg')}
        {ScheduleCard('Quiz',' Triquizzard tournament','Finals','11:30 am to 01:30 pm','To be announced','quiz.jpg')}
        {ScheduleCard('Dramatics','Aathi, idhu adhulla','Single shot event','11:30 am to 01:30 pm','To be announced','drama.jpg')}
        {ScheduleCard('Cinema','Thirai @480°','Finals','Will be announced on the event day','To be announced','cinema.jpg')}
        {ScheduleCard('Sports','Vinter bowl-out (Cricket)','Group stages','To be announced','To be announced','sport.jpg')}
        {ScheduleCard('Sports','Vinter kick-off (Football)','Group stages','To be announced','To be announced','sport.jpg')}
        {ScheduleCard('Music','Acoustic Nirvana','Single shot event','2:00 pm to 4:00 pm','To be announced','music.jpg')}
        {ScheduleCard('Dance','Five,Six,Seven,Eight','Single shot event','02:00 pm to 02:30 pm','To be announced','dance.jpg')}
        {ScheduleCard('Dramatics','The Imitation Game','Finals','02:00 pm to 04:00 pm','To be announced','drama.jpg')}
        {ScheduleCard('Quiz','Ithihaas Quiz','Prelims','02:00 pm to 03:00 pm','To be announced','quiz.jpg')}
        {ScheduleCard('Art','Cartoon Universe Crossover','Single shot event','02:00 pm to 05:00 pm','To be announced','art.jpg')}
        {ScheduleCard('English literature','Think on your Feet','Prelims','02:00 pm to 03:00 pm','To be announced','elits.jpg')}
        {ScheduleCard('Tech','Python prowess quiz','Finals','02:00 pm to 04:00 pm','To be announced','quiz.jpg' )}
        {ScheduleCard('தமிழ் இலக்கியம்','மொழியமுதம் ','Finals/இறுதிச்சுற்று ','02:30 am to 04:30 pm','To be announced','tamillits.jpg')}
        {ScheduleCard('Quiz','Ithihaas Quiz','Finals','03:30 pm to 05:30 pm','To be announced','quiz.jpg')}
        {ScheduleCard('English literature','Think on your Feet','Prelims','03:30 pm to 05:30 pm','To be announced','elits.jpg')}
        {ScheduleCard('Dance','Heels in the sky','Finals','5:00 pm to 06:00pm','To be announced','dance.jpg')}
        {ScheduleCard('Title event','Mr/Mrs Vinterbash','Finals','03:30 pm onwards','To be announced','eventvinterlogo.jpg')}
      </div>
    </div>
  );
}

export default Schedule;
