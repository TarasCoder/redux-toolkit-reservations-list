import React, { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import ReservationCard from "./components/ReservationCard";
import { useDispatch, useSelector } from "react-redux";
import { addPeopleToList } from "./features/addingPeople/addingPeopleSlice";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [name, setName] = useState("");
  const reservations = useSelector((state) => state.addingPeopleSlice.value);
  const users = useSelector((state) => state.customerSlice.value);
  const dispatch = useDispatch();

  const addPersonToList = (ev) => {
    ev.preventDefault();
    let id = uuidv4();
    dispatch(addPeopleToList({ id, name }));
    setName("");
  };

  return (
    <div className="App">
      <div className="App">
        <div className="reservationBlock">
          <h3>All starts here!</h3>
          {reservations.map((reservation) => (
            <ReservationCard key={reservation.id} id={reservation.id} res={reservation} />
          ))}
          <div className="reservation-input">
          <form>
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <button onClick={addPersonToList}>Add</button>
          </form>
          </div>
        </div>
        <div className="usersBlock">
          <h3>Here are the reservations</h3>
          {users.map((user, id)=><UserCard key={id} user={user} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
