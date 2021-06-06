import React, { useEffect, useState } from "react";
import "./MealPlan.css";
import MealCard from "./MealCard";
import calorie from "../images/calorie.png";
import carbon from "../images/carbon.png";
import protein from "../images/protein.png";
import fat from "../images/fat.png";

function NormalWeight() {
  const [normalPlan, setNormalPlan] = useState([]);
  const [nutrients, setNutrients] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://api.spoonacular.com/mealplanner/generate?apiKey=2d4ee048b2b2491b9b8ec230b50342c8&targetCalories=2200&diet=vegan&timeFrame=day",

      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setNormalPlan(result.meals);
        setNutrients(result.nutrients);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="full">
      <h3 className="text-center mb-4">
        You are an NormalWeight Person. You should maintain your weight with
        taking 2200 calories per day.
      </h3>
      <div className="container mb-4">
        <div className="row mx-auto">
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
            <span className="me-3">
              <img src={calorie} className="iconWidth me-1" alt="..." />
              <span className="nutrientInfo me-1">
                Total Calories: {nutrients.calories}
              </span>
            </span>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
            <span className="me-3">
              <img src={protein} className="iconWidth me-1" alt="..." />
              <span className="nutrientInfo me-1">
                Total Protein: {nutrients.protein}
              </span>
            </span>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
            <span className="me-3">
              <img src={fat} className="iconWidth me-1" alt="..." />
              <span className="nutrientInfo me-1">
                Total Fats: {nutrients.fat}
              </span>
            </span>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
            <span className="me-3">
              <img src={carbon} className="iconWidth me-1" alt="..." />
              <span className="nutrientInfo me-1 fs-6">
                Total Carbohydrates: {nutrients.carbohydrates}
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-center">
          {normalPlan.map((item, index) => {
            return (
              <div
                className="col-sm-12 col-md-12 col-lg-4 col-xl-4"
                key={index}
              >
                <MealCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NormalWeight;
