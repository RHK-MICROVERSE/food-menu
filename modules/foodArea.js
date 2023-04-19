const dropdownFoodAreaes = document.querySelector('.dropdown-food-areaes');

const foodAreaes = {
  displayAreaes: () => {
    const getResponse = async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const foodAreaesData = await response.json();
      return foodAreaesData;
    };

    getResponse().then((foodAreaesData) => {
      const areaesData = foodAreaesData.meals;

      dropdownFoodAreaes.innerHTML = areaesData.map((area) => `
        <a href="#">${area.strArea}</a>
      `).join('');
    });
  },
};

export default foodAreaes;
