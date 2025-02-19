// ITERATION 1

const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Designer",
    age: 22,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image:
      "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "white",
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Entrepreneur",
    age: 45,
    description: "Billionaire video game designer",
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "purple",
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
  },
  {
    firstName: "Eleanor",
    lastName: "Green",
    occupation: "Socialité",
    age: 36,
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
      "He is a former football player who tries to get by on his former glory",
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "yellow",
  },
];

// Rooms Array

const roomsArray = [
    {
        name: "Dining Room"
    },
    {
        name: "Conservatory"
    },
    {
        name: "Kitchen"
    },
    {
        name: "Study"
    },
    {
        name: "Library"
    },
    {
        name: "Billiard Room"
    },
    {
        name: "Lounge"
    },
    {
        name: "Ballroom"
    },
    {
        name: "Hall"
    },
    {
        name: "Spa"
    },
    {
        name: "Living Room"
    },
    {
        name: "Observatory"
    },
    {
        name: "Theater"
    },
    {
        name: "Guest House"
    },
    {
        name: "Patio"
    },
];

// Weapons Array

const weaponsArray = [
    {
        name: "rope",
        weight: 10
    },
    {
        name: "knife",
        weight: 8
    },
    {
        name: "candlestick",
        weight: 2
    },
    {
        name: "dumbbell",
        weight: 30
    },
    {
        name: "poison",
        weight: 2
    },
    {
        name: "axe",
        weight: 15
    },
    {
        name: "bat",
        weight: 13
    },
    {
        name: "trophy",
        weight: 25
    },
    {
        name: "pistol",
        weight: 20
    },
];


// ITERATION 2

function selectRandom(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
}

// ITERATION 3

function revealMystery({suspect, weapon, room}) {
    return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`
}