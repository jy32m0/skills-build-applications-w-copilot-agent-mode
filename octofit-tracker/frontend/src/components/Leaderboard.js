
import React, { useEffect, useState } from 'react';
// Use Codespace Django REST API endpoint suffix for Leaderboard
const API_URL = window.location.hostname.includes('app.github.dev')
  ? `https://${window.location.hostname}/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/';

function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
//    fetch(API_URL)
    fetch('https://octofit-tracker-backend.onrender.com/api/leaderboard/') // Use this for production
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Leaderboard</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>Team</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(entries) && entries.map((entry, idx) => (
                <tr key={idx}>
                  <td>{entry.team_name}</td>
                  <td>{entry.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
