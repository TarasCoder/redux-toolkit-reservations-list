import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import ReservationCard from "./components/ReservationCard";

function App() {
  return (
    <div className="App">
      <div className="App">
        <div className="reservationBlock">
          <h3>All starts here!</h3>
          <ReservationCard />
          <div className="reservation-input">
            <input type="text" />
            <button>Add</button>
          </div>
        </div>
        <div className="usersBlock">
          <h3>Here are the reservations</h3>
          <UserCard />
        </div>
      </div>
    </div>
  );
}

export default App;
