import React, { useEffect } from "react";
import { fetchCountries } from "../features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { Country } from "./Country";

export function Countries() {
  const dispatch = useDispatch();
  const dataToMap = useSelector((state) => state.search.data);
  const show = useSelector((state) => state.search.show);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <section className="flex flex-wrap sm:flex-row flex-col items-center sm:items-start sm:w-11/12 w-full h-auto mx-auto">
      {!show
        ? dataToMap.map((country, idx) => (
            <Country
              key={idx}
              name={country.name.official}
              population={country.population}
              region={country.region}
              flag={country.flags.png}
              capital={country.capital}
            />
          ))
        : null}
    </section>
  );
}
