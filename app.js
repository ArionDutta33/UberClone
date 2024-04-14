const signUp = document.querySelector(".signUp")
const dropdown = document.querySelector(".dropdown")
const xmark = document.querySelector(".xmark")
//*signup dropdown
signUp.addEventListener("click", () => {
    dropdown.classList.add("active-dropdown")

})
//*close event
xmark.addEventListener("click", () => {
    dropdown.classList.toggle("disable-dropdown")
})