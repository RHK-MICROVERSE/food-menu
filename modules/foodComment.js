import { mealsArray } from "./foodRandomSelection";

const div = document.createElement("div")

const popupC = `
<div class="popup">
<img class="close" src="https://static.vecteezy.com/system/resources/thumbnails/020/048/793/small/x-transparent-background-free-png.png">
<img class="popImg" src="https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg">
</div>
`
div.innerHTML = popupC

const body = document.querySelector("body");

const createPop = () =>{
    body.appendChild(div)
}


export default createPop