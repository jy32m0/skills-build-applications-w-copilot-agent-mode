
import React, { useEffect, useState } from 'react';

// Copilot agent mode: Use Codespace Django REST API endpoint suffix for Workouts
const API_URL = 'https://crispy-fishstick-77r9x9rw5vfwppx-8000.app.github.dev/api/workouts/';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setWorkouts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Workouts</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>Description</th>
                <th>User</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(workouts) && workouts.map((workout, idx) => (
                <tr key={idx}>
                  <td>{workout.description}</td>
                  <td>{workout.user_email}</td>
                  <td>{workout.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
