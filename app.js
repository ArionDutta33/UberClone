const signUp = document.querySelector(".signUp")
const dropdown = document.querySelector(".dropdown")
const xmark = document.querySelector(".xmark")
//*signup dropdown
signUp.addEventListener("click", () => {
    // if (!dropdown.classList.contains("active-dropdown")) {
    //     dropdown.classList.add("active-dropdown")
    // } else if (dropdown.classList.contains("active-dropdown")) {
    //     dropdown.classList.remove("active-dropdown")
    //     dropdown.classList.add("disable-dropdown")
    // }
    dropdown.classList.toggle("active-dropdown")

})
//*close event
xmark.addEventListener("click", () => {
    dropdown.classList.remove("active-dropdown")
})