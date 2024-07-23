import React, { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/database";

export default function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }
    if (isFocused) {
      // setLoadedPlaces((curPlaces) => [route.params.place, ...curPlaces]);
      loadPlaces();
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}
