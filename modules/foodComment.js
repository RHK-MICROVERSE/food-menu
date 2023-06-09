import { mealsArray } from './foodRandomSelection.js';

const get = async (ID, CMT) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DQ1WY7tbkUIhRnRaIdyZ/comments?item_id=${ID}`);
  let output = [];
  const data = await res.json();
  const comments = document.querySelectorAll('.comments');
  const commentCount = document.querySelectorAll('.commentC');
  data.forEach((Comment) => {
    output += `<p>[${Comment.creation_date}]&nbsp;&nbsp;${Comment.username}:${Comment.comment}</p>`;
  });
  commentCount[CMT].innerHTML = data.length;
  comments[CMT].innerHTML = output;
};

const createPop = () => {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  let county = 0;

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
&nbsp;Comments&nbsp;[<span class="commentC">0</span>]
</div>
<div class="comments">
</div><br>
<form class="flexForm">
<div class="commentTitle" align="center">
Add comment
</div>
<input type="text" class="username" placeholder="username"><br>
<input type="text" class="message" placeholder="message"><br>
<button class="submit" type="button">Submit</button>
<div class="idMeal">${api[0].idMeal}</div>
</form>
</div>
`;
    get(`"${api[0].idMeal}"`, county);

    county += 1;
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

const submitC = async (item1, user1, ID) => {
  let count = 0;
  // eslint-disable-next-line
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DQ1WY7tbkUIhRnRaIdyZ/comments/', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `"${ID}"`,
      username: item1,
      comment: user1,
    }),
  });

  mealsArray.forEach((api) => {
    get(`"${api[0].idMeal}"`, count);
    count += 1;
  });
};

window.setTimeout(() => {
  const submit = document.querySelectorAll('.submit');
  submit.forEach((sub) => {
    sub.addEventListener('click', (e) => {
      submitC(// eslint-disable-next-line
        e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value,
        e.target.previousElementSibling.previousElementSibling.value,
        e.target.nextElementSibling.innerHTML,
      );
    });
  });
}, 3000);

export { createPop, get };