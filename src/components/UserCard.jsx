import { useDispatch } from "react-redux";
import { useState } from "react";
import { addFood } from "../features/addingPeople/customerSlice";
import "./UserCard.css";

function UserCard(props) {
  const { id, name, food } = props.user;
  const [currentFood, setcurrentFood] = useState("");

  const dispatch = useDispatch();

  const handleAddFood = () => {
    dispatch(addFood({ id: id, value: currentFood }));
    setcurrentFood("");
  };

  return (
    <div className="userCard">
      <h3>{name}</h3>
      {food.map((item, id) => (
        <p key={id}>{item}</p>
      ))}
      <div className="input-block">
        <input
          type="text"
          value={currentFood}
          onChange={(ev) => {
            setcurrentFood(ev.target.value);
          }}
        />
        <button onClick={handleAddFood}>Add</button>
      </div>
    </div>
  );
}

export default UserCard;
