let list = document.querySelector(".list");
readContent();
function readContent() {
  let newData = JSON.parse(localStorage.getItem("human")) || [];
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
    let btn_heart = document.createElement("button");

    img.src = el.img;
    p_name.innerText = `Name: ${el.name}`;
    p_lastName.innerText = `LastName: ${el.lastName}`;
    btn_heart.innerHTML = `<ion-icon name="heart-sharp"></ion-icon>`;

    title.append(p_name);
    title.append(p_lastName);
    section_btn.append(btn_heart);

    card.append(img);
    card.append(title);
    card.append(section_btn);
    list.append(card);
    btn_heart.style.color = "red";

    btn_heart.addEventListener("click", () => {
      elRemove(index);
    });
  });
}

function elRemove(id) {
  let data = JSON.parse(localStorage.getItem("human")) || [];
  data.splice(id, 1);
  localStorage.setItem("human", JSON.stringify(data));
  readContent();
}
