
import React, { useEffect, useState } from 'react';

// Copilot agent mode: Use Codespace Django REST API endpoint suffix for Activities
const API_URL = 'https://crispy-fishstick-77r9x9rw5vfwppx-8000.app.github.dev/api/activity/';
  
function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Activities</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>Type</th>
                <th>User</th>
                <th>Duration (min)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(activities) && activities.map((activity, idx) => (
                <tr key={idx}>
                  <td>{activity.type}</td>
                  <td>{activity.user_email}</td>
                  <td>{activity.duration}</td>
                  <td>{activity.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Activities;
