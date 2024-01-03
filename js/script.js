let name = document.querySelector(".name");
let lastName = document.querySelector(".last_name");
let img = document.querySelector(".img");
let btn_create = document.querySelector(".create");

btn_create.addEventListener("click", () => {
  let obj = {
    name: name.value,
    lastName: lastName.value,
    img: img.value,
  };

  let data = JSON.parse(localStorage.getItem("man")) || [];
  data.push(obj);
  localStorage.setItem("man", JSON.stringify(data));
});
