import { GEMINI_API_KEY, OPTIONS_OF_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { aiSearchMovies } from "../utils/movieSlice";

const useSmartAssistSearch = (textOfSearchbar, setLoading) => {
  const dispatch = useDispatch();

  const SearchMovies = async (moviesList) => {
    const searchMovieApi = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${moviesList}&include_adult=false&language=en-US&page=1`,
      OPTIONS_OF_API
    );
    const json = await searchMovieApi.json();
    return json.results;
  };

  const handleSubmit = async () => {
    const API_KEY = GEMINI_API_KEY;
    const userInput =
      "Give me " +
      textOfSearchbar.current.value +
      "Give me only 5 movie titles from the 2020s, without release years or any extra characters like \n. Format the output as: movie1, movie2, movie3, movie4, movie5";

    if (!userInput) {
      return;
    }
    setLoading(true);

    const requestData = {
      contents: [
        {
          role: "user",
          parts: [{ text: userInput }],
        },
      ],
    };

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": API_KEY,
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();

      const ApiMovies = data?.candidates[0]?.content?.parts[0]?.text;
      const movieListWithArray = ApiMovies.replace(/\n/g, ", ")
        .split(",")
        .map((movie) => movie.trim());

      const moviesFormTheSearch = movieListWithArray.map((m) =>
        SearchMovies(m)
      );
      const outputOfSearchbar = await Promise.all(moviesFormTheSearch);
      dispatch(aiSearchMovies(outputOfSearchbar));
    } catch (error) {
      console.error("Error during API request:", error);
    } finally {
      setLoading(false);
    }
  };

  return handleSubmit;
};

export default useSmartAssistSearch;
