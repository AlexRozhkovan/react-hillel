import { memo, useState } from "react";

const PlayerInput = memo(({ id, label, onSubmit }) => {
  const [userName, setUserName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(id, userName);
  };

  return (
    <form className="column" onSubmit={handleSubmit}>
      <label className="header" htmlFor="userName">
        {label}
      </label>
      <input
        id="userName"
        type="text"
        autoComplete="off"
        placeholder="GitHub UserName"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button className="button" type="submit" disabled={!userName.length}>
        Submit
      </button>
    </form>
  );
});

export default PlayerInput;
