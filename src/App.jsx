import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import SingleRecepies from "./components/single recipes/SingleRecepies";
import CartItems from "./components/cart items/CartItems";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  useEffect(() => {
    fetch("./recipeData.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setRecipes(data);
      });
  }, []);
  // console.log(recipes);

  const handleCart = (cartItem) => {
    // console.log(cartItem);

    // Check if the cart item already exists in the cart array
    const isExist = cart.find((item) => item.id === cartItem.id);
    // console.log(isExist);

    // If the item does not exist in the cart, add it
    if (!isExist) {
      setCart([...cart, cartItem]);
    } else {
      setAlertMessage("Item already in cart.");
      setTimeout(() => {
        setAlertMessage("");
      }, 2000);
    }
  };
  // console.log(cart);

  const handlePreparing = (item) => {
    //Remove the item from the "Want to cook" section
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    // console.log("Preparing item:", item);
    setCart(updatedCart);

    //Add the item to the "Currently cooking" section
    setCurrentlyCooking([...currentlyCooking, item]);
  };

  return (
    <>
      <Header />
      <Banner />
      {/* Our Recipes head part */}
      <div className="text-black flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold my-4">Our Recipes</h1>
        <p className="md:mx-[20%]">
          Explore a diverse array of mouthwatering recipes crafted by culinary
          experts from around the globe. From traditional favorites to
          innovative creations, there's something delicious waiting for every
          taste bud in Our Recipes section.
        </p>
      </div>
      <div className="main-container flex flex-row justify-around text-center gap-[3%] mt-[2%]">
        <div className="main-cards">
          {recipes.map((pd) => (
            <SingleRecepies key={pd.id} recipes={pd} handleCart={handleCart} />
          ))}
        </div>

        <div className="main-cart basis-[48%] bg-[#f5f5f5] w-[100%]">
          {/* Render alert message if it exists */}
          <div>
            {alertMessage && (
              <div role="alert" className="alert alert-info mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{alertMessage}</span>
              </div>
            )}
            <h1 className="mt-[1%]">Want to cook: {cart.length}</h1>
            <hr style={{ border: "1px solid #2828281d", width: "100%" }} />
            <div className="cart-table-head flex flex-row justify-between items-center text-center px-[3%]">
              <h3>Name</h3>
              <h3>Time</h3>
              <h3>Calories</h3>
            </div>
            <div>
            {cart.map((item, index) => (
                <CartItems key={index} item={item} onPreparing={handlePreparing} />
              ))}
            </div>

            <div className="current-cook mt-[4%]">
              <h1>Currently cooking: {currentlyCooking.length}</h1>
              <hr style={{ border: "1px solid #2828281d", width: "100%" }} />
              <div className="cart-table-head flex flex-row justify-between items-center text-center px-[3%]">
                <h3>Name</h3>
                <h3>Time</h3>
                <h3>Calories</h3>
              </div>
              {currentlyCooking.map((item, index) => (
                <CartItems key={index} item={item} isCooking={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
