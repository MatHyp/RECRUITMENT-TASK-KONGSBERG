import React, { useState, useEffect } from "react";

function Table() {
  const [standings, setStandings] = useState();

  useEffect(() => {
    fetch(
      "https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2022&sort=asc"
    )
      .then((results) => results.json())
      .then(({ data }) => {
        console.log(data.standings);

        setStandings(data.standings);
      });
  }, []);

  return <div></div>;
}

export default Table;
