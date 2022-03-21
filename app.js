const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const btns = document.querySelectorAll(".btn");
const content = document.querySelector(".content");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");

function tab11() {
  tab1.classList.add("active");
  tab2.classList.remove("active");
  tab3.classList.remove("active");
  p1.classList.add("active");
  p2.classList.remove("active");
  p3.classList.remove("active");
}
function tab22() {
  tab2.classList.add("active");
  tab1.classList.remove("active");
  tab3.classList.remove("active");
  p1.classList.remove("active");
  p2.classList.add("active");
  p3.classList.remove("active");
}
function tab33() {
  tab3.classList.add("active");
  tab2.classList.remove("active");
  tab1.classList.remove("active");
  p1.classList.remove("active");
  p2.classList.remove("active");
  p3.classList.add("active");
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.textContent === "tab1") {
      tab11();
    } else if (e.target.textContent === "tab2") {
      tab22();
    } else {
      tab33();
    }
  });
});
