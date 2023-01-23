import "./UserCard.css";

function UserCard() {
  return (
    <div className="userCard">
      <h3>User Name</h3>
      <div className="input-block">
      <input type="text" />
      <button>Add</button>
      </div>
    </div>
  );
}

export default UserCard;
