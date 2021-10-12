
window.onload = () =>
{
    multipleimage()

}

let files = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpeg"]


let index=-1
let len = files.length
function multipleimage()
{

    for (let index = 0; index < files.length; index++) {
        createimage()
        
    }



}

function createimage()
{
    
    let slider= document.querySelector("#slider")
    let div = document.createElement("div")
    div.setAttribute("class","imageslider")
    let image= document.createElement("img")
    
    
    image.src = 'images/'+files[++index]

    



    div.appendChild(image)
    slider.appendChild(div)

}

function prevslide()
{
    var images=  document.querySelectorAll(".imageslider")

    for (const image of images) {
        image.style.display="none"
        
    }
  index =  index <= 0 ? len-1 : --index;
  images[index].style.display="block"
 

}

function nextSlide()
{
    var images=  document.querySelectorAll(".imageslider")

    for (const image of images) {
        image.style.display="none"
        image.classList.remove("animate")

        
    }
  index =  index >= len-1 ? 0 : ++index;
  images[index].style.display="block"
  images[index].classList.add("animate")
 

}
