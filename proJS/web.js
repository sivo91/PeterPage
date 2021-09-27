

const url = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=d'
const output = document.querySelector('.cocktailbody')
 
const drinks = fetch(url)
 .then(res => res.json())
  .then(data => {
     console.log(data)
      let out = ''
      data.drinks.forEach(function(item) {
        //console.log(item)
        out += `
          <div class="cocktailbox">
          <h2>${item.strDrink}</h2>
          <div class="imgcockt">
            <img src="${item.strDrinkThumb}" class="imgdrink">
          </div>
        </div>
        `
        output.innerHTML = out
      })
  })

   //for back side
  /*  <div class="cocktailback hidden">
           <h2>${item.strDrink}</h2>
            <ul class="ingrediences">
                 <li>${item.strIngredient1}</li>
                 <li>${item.strIngredient2}</li>
                 <li>${item.strIngredient3}</li>
            </ul>
         </div> */