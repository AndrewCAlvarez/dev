function App() {
  let parentElem = document.querySelector("#main");
  let img =
    "https://vignette.wikia.nocookie.net/disney/images/8/80/Profile_-_Darth_Vader.png/revision/latest?cb=20190314100842";
  name = "Darth Vader";
  bio = "Chill dude looking to rule the galaxy with my son.";
  cardCreationForm(parentElem, "Image");
  cardCreationForm(parentElem, "Name");
  cardCreationForm(parentElem, "Bio");
  createProfile(parentElem, img, name, bio);
}

function createProfile(parentElem, img, name, bio) {
  // Create a card element with an image, name, and small bio
  let card = document.createElement("div");
  card.classList.add("card");

  let image = document.createElement("img");
  image.src = img;
  image.classList.add("card-img-top");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let title = document.createElement("h4");
  title.innerText = name;
  title.classList.add("card-title");

  let para = document.createElement("p");
  para.innerText = bio;
  para.classList.add("card-text");

  cardBody.appendChild(image);
  cardBody.appendChild(title);
  cardBody.appendChild(para);
  card.appendChild(cardBody);
  parentElem.appendChild(card);
}

function cardCreationForm(parentElem, label) {
  //creates a form with 3 inputs and 1 button:img url, name, bio, and create profile
  let form = document.createElement("form");
  formGroup = createFormGroup(label);
  form.appendChild(formGroup);
  parentElem.appendChild(form);
}

function createFormGroup(label) {
  let formGroup = document.createElement("div");
  formGroup.classList.add("form-group");

  let labelElem = document.createElement("label");
  labelElem.innerText = label;

  let inputElem = document.createElement("input");
  inputElem.placeholder = label;
  inputElem.type = "text";
  inputElem.classList.add("form-control");

  formGroup.appendChild(labelElem);
  formGroup.appendChild(inputElem);

  return formGroup;
}
