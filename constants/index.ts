const FOOD_OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.FOOD_API_KEY!,
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

const FOOD_URL =
  "https://tasty.p.rapidapi.com/recipes/list-similarities?recipe_id=8138";

const MOVIE_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.MOVIE_ACCESS_TOKEN}`,
  },
};

const MOVIE_URL = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc`;

const PRODUCT_URL = `https://dummyjson.com/products`;
//Single product: 'https://dummyjson.com/products/1'


export { FOOD_OPTIONS, FOOD_URL, MOVIE_OPTIONS, MOVIE_URL, PRODUCT_URL };
