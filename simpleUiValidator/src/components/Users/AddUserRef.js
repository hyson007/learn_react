import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import React, { useState, useRef } from "react";

const AddUserRef = (props) => {
  // const [enterUsername, setEnterUsername] = useState("");
  // const [enterAge, setEnterAge] = useState();
  const [error, setError] = useState(false);
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    //validation
    if (nameInputRef.current.value === undefined || ageInputRef.current.value === undefined) {
    // if (enterUsername === undefined || enterAge === undefined) {
        setError({
            title: "Invalid input",
            message: "Please enter a valid username and age"
        });
      return;
    }

    if (nameInputRef.current.value.trim().length === 0 || ageInputRef.current.value.trim().length === 0) {
    // if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
        // console.log(enterUsername, enterAge);
        setError({
            title: "Invalid input",
            message: "Please enter a valid username and age"
        });
      return;
    }

    if (parseInt(ageInputRef.current.value) < 0 || parseInt(ageInputRef.current.value) > 120) {
        setError({
            title: "Invalid age",
            message: "Please enter a valid age (>0)"
        });
      return;
    }

    const newUser = {
      username:  nameInputRef.current.value,
      age: ageInputRef.current.value,
      id: Math.random(),
    };
    props.onSetUsers(newUser);
    // console.log(enterUsername, enterAge);
    //reset the form then feed to the form value
    // setEnterUsername("");
    // setEnterAge("");
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  // const usernameChangeHandler = (event) => {
  //   setEnterUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnterAge(event.target.value);
  // };

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
            // value={enterUsername || ""}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            // value={enterAge || ""}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUserRef;
