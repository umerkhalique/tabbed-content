const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    if (e.target.textContent === "tab1") {
      tab1.classList.add("active");
      tab2.classList.remove("active");
      tab3.classList.remove("active");
    } else if (e.target.textContent === "tab2") {
      tab2.classList.add("active");
      tab1.classList.remove("active");
      tab3.classList.remove("active");
    } else {
      tab3.classList.add("active");
      tab2.classList.remove("active");
      tab1.classList.remove("active");
    }
  });
});
