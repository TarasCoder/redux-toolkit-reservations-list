import "./ReservationCard.css";
import { removePeopleFromList } from "../features/addingPeople/addingPeopleSlice";
import { addPeopleToCustomers } from "../features/addingPeople/customerSlice";
import { useDispatch } from "react-redux";

function ReservationCard(props) {
  const dispatch = useDispatch();

  const handleClickOnReservation = () => {
    dispatch(removePeopleFromList(props.id));
    dispatch(addPeopleToCustomers({
      id: props.id,
      name: props.res.name,
      food: []
    }));
  };

  return (
    <div className="userName" onClick={handleClickOnReservation}>
      <h5>{props.res.name}</h5>
    </div>
  );
}

export default ReservationCard;
