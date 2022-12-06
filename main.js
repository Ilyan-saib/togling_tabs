let bttn = document.getElementsByClassName('bttn')
let general = document.getElementById('general')



for (let i = 0; i < bttn.length; i++) {
    bttn[i].addEventListener("click", () => {
        
        for (let j = 0; j < bttn.length; j++) {
            bttn[j].style.backgroundColor = "white"
        }
        bttn[i].style.backgroundColor = "#1196FF"
    })
}


general.addEventListener('mouseleave',()=>{
  for (let i = 0; i < bttn.length; i++) {

bttn[i].style.backgroundColor = "white"


  }


})