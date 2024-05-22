let assignmentData = [
    {
      "id": 1,
      "name": "Apple",
      "category": "Fruits",
      "price": 0.5,
      "inStock": true,
      "description": "A crisp, sweet red apple.",
      "nutrition": {
        "calories": 52,
        "fat": 0.2,
        "carbohydrates": 14,
        "protein": 0.3
      }
    },
    {
      "id": 2,
      "name": "Banana",
      "category": "Fruits",
      "price": 0.3,
      "inStock": true,
      "description": "A ripe, yellow banana.",
      "nutrition": {
        "calories": 89,
        "fat": 0.3,
        "carbohydrates": 23,
        "protein": 1.1
      }
    },
    {
      "id": 3,
      "name": "Carrot",
      "category": "Vegetables",
      "price": 0.2,
      "inStock": true,
      "description": "A fresh, crunchy carrot.",
      "nutrition": {
        "calories": 41,
        "fat": 0.2,
        "carbohydrates": 10,
        "protein": 0.9
      }
    },
    {
      "id": 4,
      "name": "Bread",
      "category": "Bakery",
      "price": 2.5,
      "inStock": true,
      "description": "A loaf of freshly baked bread.",
      "nutrition": {
        "calories": 265,
        "fat": 3.2,
        "carbohydrates": 49,
        "protein": 9
      }
    }
]
  ;

const infoContainer = document.getElementById("arr-info");

function generateScreen()
{
    infoContainer.innerHTML = `<tr><th>Name</th><th>Price</th><th>Info</th></tr>`;
    for(let info of assignmentData)
        {                    
            infoContainer.innerHTML +=`<tr><td>${info.name}</td> <td>${info.price}</td> <td>${info.description}</td></tr>`
        }
}

function sortData()
{
    console.log("sorting");
    assignmentData.sort((a,b) => {return ('' + a.name).localeCompare(b.name)});
    generateScreen();
}

generateScreen();