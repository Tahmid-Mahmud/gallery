for (let index = 1; index < 10; index++) {
    let im = String(index)+".jpg";
    let div=document.createElement("div")
    let img=document.createElement("img")
    div.setAttribute('class', 'carousel-item')
    img.setAttribute('src', im)
    img.setAttribute('class', 'd-block w-100')
    div.appendChild(img)
    try {
    document.getElementsByClassName("carousel-inner")[0].appendChild(div)
    console.log(im)
    } catch (error) {
        break;
    }
    
}