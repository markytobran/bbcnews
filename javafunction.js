// Functions

// Header Function
function makeHeader(number, section, value, div) {
  const headerDiv = document.createElement("div");
  let header = document.createElement("heading");
  header = ` <heading class="heading"><h1>${value.body[number].model.text}</h1></heading>`;
  headerDiv.innerHTML = header;
  section.appendChild(headerDiv);
  div.appendChild(section);
}

// Paragraph function
function makePara(number, section, value, div) {
  const pDiv = document.createElement("div");
  let pEl = document.createElement("p");
  pEl = `<p class="parael"> ${value.body[number].model.text}</p>`;
  pDiv.innerHTML = pEl;
  section.appendChild(pDiv);
  div.appendChild(section);
}

// Image function
function makeImage(number, section, value, div) {
  const imgDiv = document.createElement("div");
  let imgEl = document.createElement("img");
  imgEl.setAttribute("src", `${value.body[number].model.url}`);
  imgEl.setAttribute("width", `${value.body[number].model.width}`);
  imgEl.setAttribute("height", `${value.body[number].model.height}`);
  imgEl.setAttribute("alt", `${value.body[number].model.altText}`);
  imgDiv.appendChild(imgEl);
  section.appendChild(imgDiv);
  div.appendChild(section);
}

// List function

function makeList(number, section, value, div) {
  const listDiv = document.createElement("div");
  const listUl = document.createElement("ul");
  const listLi = document.createElement("li");
  listUl.className = "list";
  listUl.textContent = `${value.body[number].model.items[0]}`;
  listLi.textContent = `${value.body[number].model.items[1]}`;
  listUl.appendChild(listLi);
  listDiv.appendChild(listUl);
  section.appendChild(listDiv);
  div.appendChild(section);
}

// List function 2
function makeListTwo(number, section, value, div) {
  const listDiv = document.createElement("div");
  const listUl = document.createElement("ul");
  const listLi = document.createElement("li");
  const listLiOne = document.createElement("li");
  const listLiTwo = document.createElement("li");
  listUl.className = "list";
  listUl.textContent = `${value.body[number].model.items[0]}`;
  listLi.textContent = `${value.body[number].model.items[1]}`;
  listLiOne.textContent = `${value.body[number].model.items[2]}`;
  listLiTwo.textContent = `${value.body[number].model.items[3]}`;
  listUl.appendChild(listLi);
  listUl.appendChild(listLiOne);
  listUl.appendChild(listLiTwo);
  listDiv.appendChild(listUl);
  section.appendChild(listDiv);
  div.appendChild(section);
}

AOS.init({
  offset: 400,
  duration: 1000
});

// GET DOM Elements
function getDOMelement(arr, numbers) {
  numbers.forEach(function(number) {
    if (arr[number] === 1) {
      getarticleone();
    }
    if (arr[number] === 2) {
      getarticletwo();
    }
    if (arr[number] === 3) {
      getarticlethree();
    }
    if (arr[number] === 4) {
      getarticlefour();
    }
    if (arr[number] === 5) {
      getarticlefive();
    }
  });
}
getDOMelement(randomNumberArr, numbers);
