import { mealsArray } from './foodRandomSelection.js';

const createPop = () => {
  const body = document.querySelector('body');
  const div = document.createElement('div');
 
  const get = async (ID) => {
    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mV26cirAdGiyCoVktEPn/comments?item_id=${ID}`);
    let output = [];
    const data = await res.json();
    console.log(data[0].comment)
    output = `<p>[${data[0].creation_date}]&nbsp;&nbsp;${data[0].username}:${data[0].comment}</p>`
    const comments = document.querySelectorAll(".comments")
    comments.forEach((etc) => {
      etc.innerHTML = output
    })
 
  };
 
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
<div class="commentTitle">
Comments
</div>
<div class="comments">
</div>
</div>
`;
get("item2")

    div.innerHTML += popupC;
  });
  body.appendChild(div);
};

window.setTimeout(() => {
  const popButton = document.querySelectorAll('.btnForComments');

  for (let i = 0; i < popButton.length; i += 1) {
    popButton[i].addEventListener('click', () => {
      document.querySelectorAll('.popup')[i].style.display = 'flex';
    });
  }
}, 3000);

// const submitC = async (item1, user1) => {
// const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mV26cirAdGiyCoVktEPn/comments/', {

//  method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       "item_id": "item2",
//       "username": item1,
//       "comment": user1
//     }),
//   });
//   const data = await response.json();
//   console.log(data)
//   return data;

// }







// document.querySelector(".logo").addEventListener("click", function() {
//     document.querySelector(".popup").style.display = "flex"
// })

// })

// })

export default createPop;