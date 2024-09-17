let button = document.querySelector('.button')
button.addEventListener("click" , ()=>{
    button.classList.add('active');

    setTimeout(()=>{
        button.classList.remove('active');

        document.querySelector("bx").classList.replace("bx-cloud-download" , "bx-check-circle")

        document.querySelector(".button-text").innerHTML = "Completed";
    },6000)
})
