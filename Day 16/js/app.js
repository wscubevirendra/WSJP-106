const toggleBtn = document.querySelector("#toggleBtn");
const navBar = document.querySelector('header ul');



toggleBtn.addEventListener(
    'click',
    () => {
        navBar.classList.toggle('done')
        toggleBtn.classList.toggle("fa-square-xmark")
          
    }
)