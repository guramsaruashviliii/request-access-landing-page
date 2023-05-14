const email = document.querySelector("#email");
const button = document.querySelector("#button");
const error = document.querySelector("#error");
const tabletError = document.querySelector("#tablet__error");
console.log(tabletError);
button.addEventListener("click", (e) => {
  const infutValue = email.value;
  e.preventDefault();
  let reg = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  let result = reg.test(infutValue);

  if (result) {
    error.style.display = "none";
    tabletError.style.display = "none";
  } else {
    error.style.display = "block";
    tabletError.style.display = "block";
  }
});
