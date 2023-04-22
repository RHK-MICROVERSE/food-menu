//     foodCards.innerHTML = MealsData.map((meal) => `
  //       <div class="card">
  //         <img src="${meal[0].strMealThumb}" class="img-food">
  //         <div class="food-info">
  //           <p class="food-name">${meal[0].strMeal}</p>
  //           <p class="likeSymbol" 'data-id=${meal[0].idMeal}'>&#10084;</p>
  //           <div class="likenCount">
  //             <div class="likeCount" 'data-id=${meal[0].idMeal}'>0</div>
  //             <div class="likes">likes</div>
  //           </div>
  //         </div>

  //         <div class="buttons">
  //           <input type="button" class="button" value="Comments">
  //           <input type="button" class="button" value="Reservations">
  //         </div>
  //       </div>
  //     `).join('');
  //   });
  // },
  // });



// // Add or post like
// const likesButton = foodCards.querySelectorAll('.likeSymbol');

// likesButton.forEach((likeButton) => {
//   likeButton.addEventListener('click', (e) => {
//     const targetCounter = e.target.parentElement.nextSibling.nextSibling.children[0].innerText;
//     e.target.parentElement.nextSibling.nextSibling.children[0].innerText = (+targetCounter) + 1;

//     fetch(`${involvementApiUrl}${involvementApiKey}/likes/`, {
//       method: 'POST',
//       body: JSON.stringify({
//         item_id: likeButton.getAttribute('data-id'),
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//   });
// });

// const getLikeResponse = async () => {
//   const response = await fetch(
//     `${involvementApiUrl}${involvementApiKey} / likes / `,
//     {
//       method: 'GET',
//     },
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const likeAPI = await response.json();
//   return likeAPI;
// };
// getLikeResponse().then((likeAPI) => {
//   const webLikesCounter = foodCards.querySelectorAll('.likesCount');
//   const webLikeId = likeCounter.getAttribute('data-id');
//   if (webLikeId === likeAPI.item_id) {
//     //element.innerHTML = likeAPI.likes;
//   }
// });




// // get likes-counter
// getResponse().then((mealsArray) => {
//   const MealsData = mealsArray;
//   console.log(MealsData[0]);
//   MealsData.forEach((mealItem) => {
//     const divCard = document.createElement('divCard');
//     divCard.class = 'card';
//     displayImage(mealItem.getAttribute.strMealThumb, 200, 300);
//   });
//   foodCards.innerHTML = MealsData.map((meal) => `
//         <div class="card">
//           <img src="${meal[0].strMealThumb}" class="img-food">
//           <div class="food-info">
//             <p class="food-name">${meal[0].strMeal}</p>
//             <p class="likeSymbol" 'data-id=${meal[0].idMeal}'>&#10084;</p>
//             <div class="likenCount">
//               <div class="likeCount" 'data-id=${meal[0].idMeal}'>0</div>
//               <div class="likes">likes</div>
//             </div>
//           </div>

//           <div class="buttons">
//             <input type="button" class="button" value="Comments">
//             <input type="button" class="button" value="Reservations">
//           </div>
//         </div>
//       `).join('');
// });
//   },
// };




// Display Image Function
function displayImage(src, width, height) {
  const img = document.createElement('img');
  img.src = src;
  img.width = width;
  img.height = height;
  document.foodCards.appendChild(img);
}