const targetedParentDiv = document.querySelector(".content__dynamic-info");

const usersURL = "https://bobsburgers-api.herokuapp.com/storeNextDoor/";

let episodeObjects;
console.log("javascript loads")


// WORKING FUNCTION: GET ALL EPISODE NAMES

axios.get(usersURL)
  .then((response) => {

    let dataFromServer = response.data;
    episodeObjects = response.data;
  });


// Create a Div with a class
let createAndAddNewElWithClass = (elementType, className) => {
  let newDiv = document.createElement(elementType);
  newDiv.classList.add(className);
  return newDiv
}

// Create a Div with a class and a name
let createAndAddNewDivWithClassAndText = (elementType, className, text) => {
  let newDiv = document.createElement(elementType);
  newDiv.classList.add(className);
  newDiv.innerText = text;
  return newDiv
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let submitButton = document.querySelector(".content__dynamic-button")

submitButton.addEventListener("click", () => {
  console.log("submit button is tapped")
  targetedParentDiv.innerHTML = null;
  let episodeNumber = getRndInteger(1, 227);
  console.log(episodeObjects[episodeNumber]);

  
  let episodeNum = createAndAddNewDivWithClassAndText("div", "content__episode-number", "Episode Number:" + episodeObjects[episodeNumber].episode)
  let episodeSeas = createAndAddNewDivWithClassAndText("div", "content__season", "Season:" + episodeObjects[episodeNumber].season)
  let episodeName = createAndAddNewDivWithClassAndText("div", "content__episode-name", "Episode Title:" + episodeObjects[episodeNumber].name)
  let episodeImg =  createAndAddNewElWithClass("img", "content__img");
  episodeImg.setAttribute("src", episodeObjects[episodeNumber].image);

  targetedParentDiv.append(episodeImg, episodeName, episodeNum, episodeSeas)
  // targetedParentDiv.appendChild(episodeContent)


  // const result = episodeObjects.filter(word => word. > 6);
})

