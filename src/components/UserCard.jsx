import { useDispatch } from "react-redux";
import { useState } from "react";
import { addFood } from "../features/addingPeople/customerSlice";
import "./UserCard.css";

function UserCard(props) {
  const { id, name, food } = props.user;
  const [currentFood, setcurrentFood] = useState("");

  const dispatch = useDispatch();

  const handleAddFood = () => {
    dispatch(addFood(currentFood));
  };

  return (
    <div className="userCard">
      <h3>{name}</h3>
      {food.map((item) => (
        <p>{item}</p>
      ))}
      <div className="input-block">
        <input
          type="text"
          onChange={(ev) => {
            setcurrentFood({ id: id, value: ev.target.value });
          }}
        />
        <button onClick={handleAddFood}>Add</button>
      </div>
    </div>
  );
}

export default UserCard;
