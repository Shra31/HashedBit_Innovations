import React, { useEffect, useState } from "react";
import stadium from "./assets/cricket-bg.jpg";
import "./App.css";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => parseFloat(a.NRR) - parseFloat(b.NRR)
        );
        setTeams(sortedData);
      });
  }, []);

  return (
    <div className="main-container">
      <div className="overlay">
        <h1>🏏 IPL 2022 Points Table</h1>

        <div className="table-card">
          <table className="ipl-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>NRR</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{team.Team}</td>
                  <td>{team.NRR}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;