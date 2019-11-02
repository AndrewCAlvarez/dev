function App() {
  let parentElem = document.querySelector("#main");

  createForm(parentElem, "image", "name", "bio");
  // createProfile(parentElem, img, name, bio);
}

function createProfile(parentElem) {
  // Create a card element with an image, name, and small bio
  let card = document.createElement("div");
  card.classList.add("card");

  let image = document.createElement("img");
  image.src = document.querySelector("#imageInput").value;
  image.classList.add("card-img-top");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let title = document.createElement("h4");
  title.innerText = document.querySelector("#nameInput").value;
  title.classList.add("card-title");

  let para = document.createElement("p");
  para.innerText = document.querySelector("#bioInput").value;
  para.classList.add("card-text");

  cardBody.appendChild(image);
  cardBody.appendChild(title);
  cardBody.appendChild(para);
  card.appendChild(cardBody);
  parentElem.appendChild(card);

  //clear the input fields
  document.querySelector("#imageInput").value = "";
  document.querySelector("#nameInput").value = "";
  document.querySelector("#bioInput").value = "";
}

function createForm(parentElem, label1, label2, label3) {
  //creates a form with 3 inputs and 1 button:img url, name, bio, and create profile
  let form = document.createElement("form");
  formGroup1 = createFormGroup(label1);
  formGroup2 = createFormGroup(label2);
  formGroup3 = createFormGroup(label3);

  btn = createCardBtn(parentElem);

  form.appendChild(formGroup1);
  form.appendChild(formGroup2);
  form.appendChild(formGroup3);
  form.appendChild(btn);
  parentElem.appendChild(form);
}

function createFormGroup(label) {
  let formGroup = document.createElement("div");
  formGroup.classList.add("form-group");

  let labelElem = document.createElement("label");
  labelElem.innerText = label;

  let inputId = label + "Input";
  let inputElem = document.createElement("input");
  inputElem.setAttribute("id", inputId);
  inputElem.placeholder = label;
  inputElem.type = "text";
  inputElem.classList.add("form-control");

  formGroup.appendChild(labelElem);
  formGroup.appendChild(inputElem);

  return formGroup;
}

function createCardBtn(parentElem) {
  let btn = document.createElement("button");
  btn.setAttribute("class", "btn btn-primary");
  btn.innerText = "Create Card";
  btn.addEventListener("click", function() {
    createProfile(parentElem);
  });
  return btn;
}
