import React, { useEffect, useState } from "react";
import "./MealPlan.css";

function OverWeight() {
  const [overPlan, setOverPlan] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://api.spoonacular.com/mealplanner/generate?apiKey=2d4ee048b2b2491b9b8ec230b50342c8&targetCalories=2330&diet=vegan&timeFrame=day",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setOverPlan(result.meals);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="full">
      <h3 className="text-center mb-4">
        You are an OverWeight Person. You should take 2330 calories per day.
      </h3>
      <div className="container">
        <div className="row text-center">
          {overPlan.map((item, index) => {
            return (
              <div
                className="col-sm-12 col-md-12 col-lg-4 col-xl-4"
                key={index}
              >
                <div
                  className="card mx-auto mb-5"
                  style={{ width: "250px", height: "250px" }}
                >
                  <img
                    src={`https://spoonacular.com/recipeImages/${item.id}-556x370.jpg`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">{item.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OverWeight;
