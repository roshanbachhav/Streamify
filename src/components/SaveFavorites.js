import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../utils/firebaseconf";

const SaveFavorites = () => {
  const fav = useSelector((store) => store?.favorites);
  const db = getDatabase();

  useEffect(() => {
    if (fav && auth.currentUser) {
      const userId = auth.currentUser.uid;

      const saveFavoritesToFirebase = async () => {
        try {
          const userFavoritesRef = ref(db, `users/${userId}/favorites`);
          await set(userFavoritesRef, fav);
        } catch (error) {
          console.error(error);
        }
      };

      saveFavoritesToFirebase();
    }
  }, [fav, auth.currentUser, db]);

  return null;
};

export default SaveFavorites;
