import { exportedArray } from "./foodRandomSelection"

const createPop = () =>{
    const body = document.querySelector("body");
const div = document.createElement("div")
let mealsArray = exportedArray
console.log(exportedArray)
mealsArray.forEach((img, foodname, ingredient) => {
   
    const popupC = `
<div class="popup">
<img class="close" onclick="this.parentNode.style.display = 'none';" src="https://static.vecteezy.com/system/resources/thumbnails/020/048/793/small/x-transparent-background-free-png.png">
<img class="popImg" src="${img[0].strMealThumb}">
<h3 class="FoodName">${img[0].strMeal}</h3>
<p class="ingredients">
The Ingredients
</p>
<ul class="ingredient">
</ul>
</div>
`

div.innerHTML += popupC
})
body.appendChild(div)






  
}


export default createPop