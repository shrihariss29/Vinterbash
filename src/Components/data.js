const data = [
  {
    position: '1',
    name: 'Sri Akilandeswari Vidyalaya',
    points: '17',
    events: [
      { name: 'Nalamdhana - I', points: '10' },
      { name: 'Aathi Idhu Adhu Illa? - II', points: '07'},
      { name: 'Imitation Game - I', points: '10'},
      { name: 'Imitation Game - II', points: '07'},
      { name: 'Thirai 480 - III' , points: '03'},
      { name: 'Acoustic Nirvana - III', points : '05'}, 
      { name: 'Mozhiyamudham - III', points : '03'}, 
    ],
  },
  {
    position: '2',
    name: 'Kamala Niketan Montessari School',
    points: '14',
    events: [
      { name: 'Nalamdhana - II', points: '07' },
      { name: 'The Triquizzard tournument - I', points: '07' },
      { name: 'Imitation Game - III', points: '05'},
      { name: 'Mozhiyamudham - I', points : '07'}, 
    ],
  },
  
  {
    position: '3',
    name: 'Santhanam Vidyalaya',
    points: '13',
    events: [
      { name: 'Chordially Yours : group music - I', points: '10' },
      { name: 'The Triquizzard tournament - III', points: '03' },
      {name: 'Multimedia Madness - III', points: '05'},
      { name: 'Thirai 480 - II' , points: '05'},
    ],
  },
  

  {
    position: '4',
    name: 'Mahathma Gandhi Centenary Vidhyalaya',
    points: '10',
    events: [
      { name: 'Aathi Idhu Adhu Illa? - I', points: '10' },
      {name: 'Multimedia Madness - III', points: '03'}, 
    ],
  },
  {
    position: '4',
    name: 'Sri Vageesha Vidhyashram',
    points: '10',
    events: [
      { name: 'The Triquizzard tournament - II', points: '05' },
      {name : 'Aathi Idhu Adhu Illa? - III', points: '05'},
      { name: 'Acoustic Nirvana - I', points : '10'},
      { name: 'Mozhiyamudham - II', points : '05'}, 
    ],
  },
  {
    position: '6',
    name: 'Sri Vignesh Vidhyalaya',
    points: '07',
    events: [
      { name: 'Chordially Yours : group music - II', points: '07' },
    ],
  },
  {
    position: '7',
    name: 'Alpha wisdom Vidhyashram',
    points: '05',
    events: [
      { name: 'Chordially Yours : group music - III', points: '05' },
      { name:'Thirai 480 - I', points: '07'},
      { name: 'Acoustic Nirvana - II', points : '07'}, 
    ],
  },
  {
    position: '7',
    name: 'RSK Higher Secondary School',
    points: '05',
    events: [
      { name: 'Nalamdhana - III', points: '05' },
      {name: 'Multimedia Madness - I', points:'07'},
      { name: 'What If Odessey? - II', points: '05' },
    ],
  },




  {
    position: '-',
    name: 'Alpha Plus Matriculation HS School',
    points: '00',
    events: [
      { name: 'Event - I', points: '00' },
    ],
  },

  {
    position: '-',
    name: 'St.Joan of Arc International School',
    points: '00',
    events: [
      { name: 'Event - I', points: '00' },
    ],
  },

  {
    position: '-',
    name: 'Brindavan Vidyalaya',
    points: '00',
    events: [
      { name: 'Event - I', points: '00' },
    ],
  },

  {
    position: '-',
    name: 'Chinmaya Vidhyalaya',
    points: '00',
    events: [
      { name: 'What If Odessey? - III', points: '03' },
    ],
  },

  {
    position: '-',
    name: 'Sri Vignesh Public School',
    points: '00',
    events: [
      { name: 'Event - I', points: '00' },
    ],
  },

  {
    position: '-',
    name: 'Aurobindo International School',
    points: '00',
    events: [
      { name: 'What If Odessey? - I', points: '07' },
    ],
  },


  {
    position: '-',
    name: 'Alpha Cambridge International',
    points: '00',
    events: [
      { name: 'Event - I', points: '00' },
    ],
  },
  {
    position: '-',
    name: 'The Higher Secondary School for Boys, Srirangam',
    points: '00',
    events: [
      { name: 'Event - I', points: '00' },
    ],
  },
  ]
  data.forEach(school => {
    school.points = school.events.reduce((acc, event) => acc + parseInt(event.points), 0);
  });
  
  data.sort((a, b) => parseInt(b.points) - parseInt(a.points));

  let currentPosition = 1, currentPoints = null;
  data.forEach((school, index) => {
    if (school.points !== currentPoints) {
      currentPosition = index + 1;
      currentPoints = school.points;
    }
    school.position = currentPosition;
  });
export default data;
