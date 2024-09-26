import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import confReducer from "./configureSlice";
import castReducer from "./movieMemberSlice";
import favoriteReducer from "./favoritesSlice";

const appStore = configureStore({
    reducer: {
        user : userReducer,
        movies : movieReducer,
        configure: confReducer,
        cast: castReducer,
        favorites : favoriteReducer
    }
})

export default appStore;