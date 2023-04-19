import { exportedArray } from "./foodRandomSelection"

const createPop = () =>{
    const body = document.querySelector("body");
const div = document.createElement("div")
let mealsArray = exportedArray
console.log(exportedArray)
mealsArray.forEach((api) => {
   
    const popupC = `
<div class="popup">
<img class="close" onclick="this.parentNode.style.display = 'none';" src="https://static.vecteezy.com/system/resources/thumbnails/020/048/793/small/x-transparent-background-free-png.png">
<img class="popImg" src="${api[0].strMealThumb}">
<h3 class="FoodName">${api[0].strMeal}</h3>
<p class="ingredients">
The Ingredients
</p>
<div class="ingredientC">
${api[0].strIngredient1}
${api[0].strIngredient2}
${api[0].strIngredient3}
${api[0].strIngredient4}
${api[0].strIngredient5}
${api[0].strIngredient6}
${api[0].strIngredient7}
${api[0].strIngredient8}
${api[0].strIngredient9}
${api[0].strIngredient10}
${api[0].strIngredient11}
${api[0].strIngredient12}
${api[0].strIngredient13}
${api[0].strIngredient14}
${api[0].strIngredient15}
${api[0].strIngredient16}
${api[0].strIngredient17}
${api[0].strIngredient18}
${api[0].strIngredient19}
${api[0].strIngredient20}
</div>
</div>
`

div.innerHTML += popupC
})
body.appendChild(div)






  
}


export default createPop