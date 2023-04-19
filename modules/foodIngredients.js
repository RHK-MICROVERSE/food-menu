const dropdownFoodIngredients = document.querySelector('.dropdown-food-ingredients');

const foodIngredients = {
  displayIngredients: () => {
    const getResponse = async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const foodIngredientsdata = await response.json();
      return foodIngredientsdata;
    };

    getResponse().then((foodIngredientsdata) => {
      const ingredientsData = foodIngredientsdata.meals;

      dropdownFoodIngredients.innerHTML = ingredientsData.map((ingredient) => `
        <a href="#">${ingredient.strIngredient}</a>
      `).join('');
    });
  },
};

export default foodIngredients;