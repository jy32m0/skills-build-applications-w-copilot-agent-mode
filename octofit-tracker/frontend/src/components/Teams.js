
import React, { useEffect, useState } from 'react';

// Copilot agent mode: Use Codespace Django REST API endpoint suffix for Teams
const API_URL = 'https://crispy-fishstick-77r9x9rw5vfwppx-8000.app.github.dev/api/teams/';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Teams</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(teams) && teams.map((team, idx) => (
                <tr key={idx}>
                  <td>{team.name}</td>
                  <td>{team.member_emails && team.member_emails.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teams;
