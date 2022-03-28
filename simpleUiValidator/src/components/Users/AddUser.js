import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import React, { useState } from "react";

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterAge, setEnterAge] = useState();
  const [error, setError] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();

    //validation
    if (enterUsername === undefined || enterAge === undefined) {
        setError({
            title: "Invalid input",
            message: "Please enter a valid username and age"
        });
      return;
    }

    if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
        console.log(enterUsername, enterAge);
        setError({
            title: "Invalid input",
            message: "Please enter a valid username and age"
        });
      return;
    }

    if (parseInt(enterAge) < 0 || parseInt(enterAge) > 120) {
        setError({
            title: "Invalid age",
            message: "Please enter a valid age (>0)"
        });
      return;
    }

    const newUser = {
      username: enterUsername,
      age: enterAge,
      id: Math.random(),
    };
    props.onSetUsers(newUser);
    // console.log(enterUsername, enterAge);
    //reset the form then feed to the form value
    setEnterUsername("");
    setEnterAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnterUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterAge(event.target.value);
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && <ErrorModal onCancel={errorHandler} title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enterUsername || ""}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={enterAge || ""}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
