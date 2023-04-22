const dropdownFoodCategories = document.querySelector('.dropdown-food-categories');

const foodCategories = {
  displayCategories: () => {
    const getResponse = async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const foodCategoriesData = await response.json();
      return foodCategoriesData;
    };

    getResponse().then((foodCategoriesData) => {
      const categoriesData = foodCategoriesData.meals;

      dropdownFoodCategories.innerHTML = categoriesData.map((category) => `
        <a href="#" id="category-${category.strCategory}">${category.strCategory}</a>
      `).join('');
    });
  },
};

export default foodCategories;