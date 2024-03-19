import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock, faFire } from '@fortawesome/free-regular-svg-icons';


const SingleRecepies = ({ recipes, handleCart }) => {
  // console.log(recipes);
  // console.log(handleCart);
  //Here we extract ingredients from json
  const ingredients = Object.values(recipes.ingredient).slice(1);

  return (
    <div className="p-[2%] ">
      <div className="flex flex-col gap-2 justify-center items-center  bg-[#f5f5f5] basis-[48%] w-[100%] border-black-300 rounded-lg p-[3%]">
        <div>
            <img className="card-img h-56 w-56 rounded-2xl" src={recipes.image} alt="" />
        </div>

        <div className="card-head flex flex-col gap-2">
            <h1 className="text-2xl font-bold ">{recipes.title}</h1>
            <p>{recipes.description}</p>
        </div><hr style={{ border:'1px solid #2828281d', width:'90%' }} />

        <div className="card-middle flex flex-col gap-1 items-center justify-center">
            <h3 className="text-xl font-bold ">
            Ingredients: {recipes.ingredient.Ingredients}
            </h3>
            <ul className="list-disc pl-4">
            {ingredients.map((ingredient, index) => (
                <li className="text-left" key={index}>
                {ingredient}
                </li>
            ))}
            </ul>
        </div><hr style={{ border:'1px solid #2828281d', width:'90%' }} />

        <div className="card-footer flex justify-center items-center flex-row gap-5">
            <p>{recipes.time}</p> 
            <p>{recipes.calories}</p>
        </div>

        <div>
            <button onClick={(e)=>handleCart(recipes)} className="btn btn-accent rounded-full">Want to Cook</button>
        </div>

      </div>
    </div>
  );
};

export default SingleRecepies;
