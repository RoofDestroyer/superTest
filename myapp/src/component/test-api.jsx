import { useState } from "react";

const TestApi = () => {
  const [team, setTeam] = useState([]);

  const getTeam = () => {
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/octet-stream",
    //     "X-RapidAPI-Key": "488f437511msh2d3854838388c55p13692cjsn135921cfebdf",
    //     "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
    //   },
    // };

    // const url = "https://free-nba.p.rapidapi.com/teams?page=0";

    fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "488f437511msh2d3854838388c55p13692cjsn135921cfebdf",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((response) => setTeam(response.data));
  };

  return (
    <div>
      <button onClick={getTeam}>Клик</button>
      {team.map((el, i) => {
        return (
          <div key={el.id}>
            {" "}
           {i+1} {el.abbreviation} {el.city}
          </div>
        );
      })}
    </div>
  );
};

export default TestApi;
