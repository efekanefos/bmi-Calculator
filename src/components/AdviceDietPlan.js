import React, { useEffect } from "react";

function AdviceDietPlan() {
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://api.spoonacular.com/mealplanner/generate?apiKey=f565984740214ff9b9552343c198fe57&targetCalories=1800&diet=vegan&timeFrame=day",
      /*
      ?apiKey=85a5fbeec33b42638a91bdd0c452d7ef
      */
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      <h1>DietPlan</h1>
    </div>
  );
}

export default AdviceDietPlan;
