const foodCards = document.querySelector('.foodCards');
const mealsArray = [];
let counter = 0;
const foodRandomSelection = {
  displayRandomFoodSelection: () => {
    const getResponse = async () => {
      while (counter < 9) {
        // eslint-disable-next-line no-await-in-loop
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/random.php',
          {
            method: 'GET',
          },
        );

        // eslint-disable-next-line no-await-in-loop
        const foodRandomdata = await response.json();
        mealsArray.push(foodRandomdata.meals);
        // eslint-disable-next-line space-infix-ops
        counter+=1;
      }
      return mealsArray;
    };
    getResponse().then((mealsArray) => {
      const MealsData = mealsArray;
      foodCards.innerHTML = MealsData.map((meal) => `
        <div class="card">
          <img src="${meal[0].strMealThumb}" class="img-food">
          <div class="food-info">
            <p class="food-name">${meal[0].strMeal}</p>
            <p class="likeSymbol">&#10084;</p>
          </div>
          <p class="likes">likes</p>
          <div class="buttons">
            <input type="button" class="button0" value="Comments">
            <input type="button" class="button1" value="Reservations">
          </div>
        </div>
      `).join('');
    });
  },

};

const exporting = () => { // eslint-disable-line
  mealsArray; // eslint-disable-line
}; // eslint-disable-line

window.setTimeout(exporting, 2);

export { foodRandomSelection, mealsArray };