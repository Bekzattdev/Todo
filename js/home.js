let list = document.querySelector(".list");
readContent();
function readContent() {
  let newData = JSON.parse(localStorage.getItem("man")) || [];
  list.innerHTML = "";
  newData.forEach((el, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let img = document.createElement("img");
    img.classList.add("img");
    let title = document.createElement("div");
    title.classList.add("title");
    let p_name = document.createElement("p");
    p_name.classList.add("p_name");
    let p_lastName = document.createElement("p");
    p_lastName.classList.add("p_lastName");
    let section_btn = document.createElement("div");
    section_btn.classList.add("section_btn");
    let btn_delete = document.createElement("button");
    let btn_heart = document.createElement("button");
    let btn_edit = document.createElement("button");

    btn_heart.classList.add("btn_heard");

    img.src = el.img;
    p_name.innerText = `Name: ${el.name}`;
    p_lastName.innerText = `LastName: ${el.lastName}`;
    btn_delete.innerHTML = `<ion-icon name="trash"></ion-icon>`;
    btn_heart.innerHTML = `<ion-icon name="heart"></ion-icon>`;
    btn_edit.innerHTML = `<ion-icon name="create"></ion-icon>`;

    title.append(p_name);
    title.append(p_lastName);
    section_btn.append(btn_delete);
    section_btn.append(btn_heart);
    section_btn.append(btn_edit);

    card.append(img);
    card.append(title);
    card.append(section_btn);
    list.append(card);

    btn_delete.addEventListener("click", () => {
      elRemove(index);
    });
    btn_heart.addEventListener("click", () => {
      let menu_man = newData.find((el, idx) => index === idx);
      let data = JSON.parse(localStorage.getItem("human")) || [];
      data.push(menu_man);
      localStorage.setItem("human", JSON.stringify(data));
      readContent();
    });

    btn_edit.addEventListener("click", () => {
      edit_list.style.display = "block";
      elEdit(index);
    });
  });
}

function elRemove(id) {
  let data = JSON.parse(localStorage.getItem("man")) || [];
  data.splice(id, 1);
  localStorage.setItem("man", JSON.stringify(data));
  readContent();
}
let edit_list = document.querySelector(".edit_list");
let edit_name = document.querySelector(".edit_name");
let edit_lastName = document.querySelector(".edit_lastName");
let edit_img = document.querySelector(".edit_img");
let save = document.querySelector(".save");

function elEdit(index) {
  let data = JSON.parse(localStorage.getItem("man")) || [];

  edit_name.value = data[index].name;
  edit_lastName.value = data[index].lastName;
  edit_img.value = data[index].img;

  edit_name.setAttribute("id", index);
  edit_lastName.setAttribute("id", index);
  edit_img.setAttribute("id", index);
}

save.addEventListener("click", () => {
  edit_list.style.display = "none";
  let nameId = edit_name.id;
  let lastNameId = edit_lastName.id;
  let imgId = edit_img.id;

  let editObj = {
    name: edit_name.value,
    lastName: edit_lastName.value,
    img: edit_img.value,
  };

  let data = JSON.parse(localStorage.getItem("man")) || [];
  data.splice(nameId, 1, editObj);
  data.splice(lastNameId, 1, editObj);
  data.splice(imgId, 1, editObj);
  localStorage.setItem("man", JSON.stringify(data));
  readContent();
});
