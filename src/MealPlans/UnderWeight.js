import React, { useEffect, useState } from "react";
import "./MealPlan.css";
import MealCard from "../MealPlans/MealCard";

function UnderWeight() {
  const styles = {
    card: {
      border: "1px solid #eeeeee",
      borderRadius: "3px",
      padding: "15px",
      width: "250px",
    },
    image: {
      height: "200px",
      width: "250px",
    },
  };
  const [underPlan, setUnderPlan] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://api.spoonacular.com/mealplanner/generate?apiKey=2d4ee048b2b2491b9b8ec230b50342c8&targetCalories=2500&diet=vegan&timeFrame=day",
      /*
      ?apiKey=85a5fbeec33b42638a91bdd0c452d7ef
      */
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setUnderPlan(result.meals);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="full">
      <h3 className="text-center mb-4">
        You are an UnderWeight Person. You should increase your weight with
        taking 2500 calories per day.
      </h3>
      <div className="container">
        <div className="row">
          {underPlan.map((item, index) => {
            return (
              <div
                className="col-sm-12 col-md-12 col-lg-4 col-xl-4"
                key={index}
              >
                <MealCard styles={styles} item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UnderWeight;
