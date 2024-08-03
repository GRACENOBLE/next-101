import { FOOD_OPTIONS, FOOD_URL, MOVIE_OPTIONS, MOVIE_URL } from "@/constants";

import FoodCard from "../components/FoodCard";

const FoodPage = async () => {
  const data = await fetch(MOVIE_URL, MOVIE_OPTIONS)
    .then((response) => response.json())
    .then((res) => res.results);

    console.log(data)

  return (
    <div className="grid grid-cols-3 gap-4">
      {data && data.map(function(food:any){
        return (
          <FoodCard
            image={food.poster_path}
            name={food.title}
            keywords={food.keywords}
          />
        );
      })}
    </div>
  );
};


export default FoodPage;
