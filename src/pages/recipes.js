import React, {useState, useEffect} from 'react'
import {Data, Buttons} from '../data.js';
import Card from '../components/Card.jsx';
import '../pages/recipe.css'

const Recipes = () => {
    const [filteredRecipes, setFilteredRecipes] = useState(null);

    const getRecipes = () => {
        const recipeList = Data;
        return recipeList;
    }

    const filterRecipes = (recipeType) => {
        let filteredRecipes = getRecipes().filter((type) => type.category === recipeType)
        return filteredRecipes;
    }

    useEffect(() => {
        console.log("Data:", Data);
        setFilteredRecipes(getRecipes());
    }, []);

    function handleRecipes(e){
        let typeRecipe = e.target.value;
        typeRecipe ? setFilteredRecipes(filterRecipes(typeRecipe)) : setFilteredRecipes(getRecipes());
    }

  return (
    <section className="recipes">
        <h1>Recipes</h1>
        <div className="btn-container">
        {Buttons && 
         Buttons.map((item, index) => (
            <>
            <button key={index}
             value={item.value}
             onClick={handleRecipes}
             className="recipe-btn"
             >
                {item.name}
             </button>
            </>
         ))}
         </div>

         {filteredRecipes && 
         filteredRecipes.map((item) => (
            <Card key={item.id} recipe={item} />
         ))}
    </section>
  );
}

export default Recipes