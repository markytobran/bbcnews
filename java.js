// DIV
const mainDiv = document.getElementById("container");

const randomNumberArr = [];
const numbers = [0, 1, 2, 3, 4];

// Get local json data
// Fetch article one
function getarticleone() {
  fetch("article-1.json")
    .then(res => {
      return res.json();
    })
    .then(data => {
      const sectionOne = document.createElement("section");
      sectionOne.setAttribute("data-aos", "fade-left");

      //Heading Element
      makeHeader(0, sectionOne, data, mainDiv);

      //Paragraph
      makePara(1, sectionOne, data, mainDiv);

      //Image
      makeImage(2, sectionOne, data, mainDiv);

      //Paragraph
      makePara(3, sectionOne, data, mainDiv);

      //Paragraph
      makePara(4, sectionOne, data, mainDiv);

      //List
      makeList(5, sectionOne, data, mainDiv);
    })
    .catch(err => {
      console.log(err);
    });
}

// Fetch article two
function getarticletwo() {
  fetch("article-2.json")
    .then(res => {
      return res.json();
    })
    .then(data => {
      const sectionTwo = document.createElement("section");
      sectionTwo.setAttribute("data-aos", "fade-right");

      //Heading Element
      makeHeader(0, sectionTwo, data, mainDiv);

      //Image
      makeImage(1, sectionTwo, data, mainDiv);

      //Paragraph
      makePara(2, sectionTwo, data, mainDiv);

      //Paragraph
      makePara(3, sectionTwo, data, mainDiv);

      //Image
      makeImage(4, sectionTwo, data, mainDiv);

      //Paragraph
      makePara(5, sectionTwo, data, mainDiv);

      //Image
      makeImage(6, sectionTwo, data, mainDiv);

      //Paragraph
      makePara(7, sectionTwo, data, mainDiv);
    })
    .catch(err => {
      console.log(err);
    });
}

// Fetch article three
function getarticlethree() {
  fetch("article-3.json")
    .then(res => {
      return res.json();
    })
    .then(data => {
      const sectionThree = document.createElement("section");
      sectionThree.setAttribute("data-aos", "fade-left");

      //Heading Element
      makeHeader(0, sectionThree, data, mainDiv);

      //Paragraph
      makePara(1, sectionThree, data, mainDiv);

      //Paragraph
      makePara(2, sectionThree, data, mainDiv);

      //Paragraph
      makePara(3, sectionThree, data, mainDiv);

      //Paragraph
      makePara(4, sectionThree, data, mainDiv);

      //Paragraph
      makePara(5, sectionThree, data, mainDiv);

      //Paragraph
      makePara(6, sectionThree, data, mainDiv);

      //Paragraph
      makePara(7, sectionThree, data, mainDiv);

      //Paragraph
      makePara(8, sectionThree, data, mainDiv);
    })
    .catch(err => {
      console.log(err);
    });
}

// Fetch article four
function getarticlefour() {
  fetch("article-4.json")
    .then(res => {
      return res.json();
    })
    .then(data => {
      const sectionFour = document.createElement("section");
      sectionFour.setAttribute("data-aos", "fade-right");

      //Heading Element
      makeHeader(0, sectionFour, data, mainDiv);

      //Image
      makePara(1, sectionFour, data, mainDiv);

      //Paragraph
      makeListTwo(2, sectionFour, data, mainDiv);

      //Paragraph
      makePara(3, sectionFour, data, mainDiv);

      //Image
      makeList(4, sectionFour, data, mainDiv);

      //Paragraph
      makePara(5, sectionFour, data, mainDiv);
    })
    .catch(err => {
      console.log(err);
    });
}

// Fetch article four
function getarticlefive() {
  fetch("article-5.json")
    .then(res => {
      return res.json();
    })
    .then(data => {
      const sectionFive = document.createElement("section");
      sectionFive.setAttribute("data-aos", "fade-left");

      //Heading Element
      makeHeader(0, sectionFive, data, mainDiv);

      //Image
      makeImage(1, sectionFive, data, mainDiv);

      //Image
      makeImage(2, sectionFive, data, mainDiv);

      //Paragraph
      makePara(3, sectionFive, data, mainDiv);
    })
    .catch(err => {
      console.log(err);
    });
}

// Random Number function
function randomNumber() {
  for (let i = 0; i < 100; i++) {
    let random = Math.floor(Math.random() * 5 + 1);
    if (randomNumberArr.includes(random)) {
      random = Math.floor(Math.random() * 5 + 1);
    } else {
      randomNumberArr.push(random);
    }
  }
}

// Generate random numbers
randomNumber();
