let btn = document.querySelector(".Quote-button");
let quote = document.querySelector(".Quote-text ");
let person = document.querySelector(".Quote-author");

const quotes = [
  {
    quote:
      '"The best way to find yourself is to lose yourself in the service of others."',
    person: "Mahatma Gandhi",
  },

  {
    quote:
      '" If you want to live a happy life, tie it to a goal, not to people or things."',
    person: "Albert Einstein",
  },

  {
    quote:
      '" At his best, man is the noblest of all animals; separated from law and justice he is the worst"',
    person: "Aristotle",
  },

  {
    quote:
      '" Your time is limited, so dont waste it living someone elses life"',
    person: "Steve Jobs",
  },

  {
    quote:
      '" Tell me and I forget, Teach me and I remember. Involve me and I learn"',
    person: "Benjamin Franklin",
  },

  {
    quote:
      '"If you look at what you have in life, you will always have more. If you look at what you dont have to live, you will never have enough."',
    person: "Oprah Winfrey",
  },

  {
    quote:
      '"It does not matter how slowly you go. As long as you do not stop."',
    person: "Confucius",
  },

  {
    quote:
      '"Our lives begin to end the day we become slient about things that matter."',
    person: "Martin Luther King, Jr",
  },

  {
    quote:
      '"Remember that not getting what you want is sometimes a wonderful stroke of luck."',
    person: "Dalai Lana",
  },

  {
    quote: '"The journey of a thousand miles begins with one step."',
    person: "Lao Tzu",
  },

  {
    quote:
      '"The price it takes to be fake is the same price it takes to be real!"',
    person: "Apostle Joshua Selman",
  },

  {
    quote: '"There is no self-made man, we are all products of God’s grace."',
    person: "Bishop David Oyedepo",
  },

  {
    quote: '"To be rewarded well is to trade well with Life"',
    person: "Mary Gideon",
  },

  {
    quote:
      "What you see with the eyes of faith is more real than what you see with your optical eyes",
    person: "Chris Oyakhilome",
  },

  {
    quote:
      "Every problem comes along with it’s solution; the bigger the problem, the bigger the testimony. Cheer up!",
    person: "Chris Oyakhilome",
  },

  {
    quote: "Remember to live while you are busy surviving",
    person: "Mary Gideon",
  },

  {
    quote:
      "We make a living by what we get, but we make a life by what we give.",
    person: "Winston Churchill",
  },

  {
    quote:
      "The struggle itself towards the heights is enough to fill a man's heart. One must imagine Sisyphus happy",
    person: "Albert Camus",
  },

  {
    quote:
      "It is always easy to be logical. It is almost impossible to be logical to the bitter end",
    person: "Albert Camus",
  },
];

// Nexting the lines of codes

const circleRoundNumber = (arrayLength, currentPos) => {
  if (currentPos < arrayLength - 1) {
    return currentPos + 1;
  }
  return 0;
};

let currentPosition = 0;

btn.addEventListener("click", () => {
  currentPosition = circleRoundNumber(quotes.length, currentPosition);

  quote.innerText = quotes[currentPosition].quote;
  person.innerText = quotes[currentPosition].person;
});

// The line of codes to select the functions randomly

// btn.addEventListener("click", () => {
//   let random = Math.floor(Math.random() * quotes.length);

//   quote.innerText = quotes[random].quote;
//   person.innerText = quotes[random].person;
// })
