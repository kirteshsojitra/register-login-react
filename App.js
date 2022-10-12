import React from "react";
import {useState} from "react";
import "./App.css";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

const arr = [];
function App(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [selectSubject, setSelectSubject] = useState("hindi");
  const [selectGender, setSelectGender] = useState("Male");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const addressRef = useRef();
  const loginRef = useRef();
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  function hanldeFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleAge(e) {
    setAge(e.target.value);
  }

  function handleDropDown(e) {
    setSelectSubject(e.target.value);
  }

  function handleRadioBtn(e) {
    setSelectGender(e.target.value);
  }

  function handleAdress(e) {
    setAddress(e.target.value);
  }

  function handleDob(e) {
    setDob(e.target.value);
  }

  function handleClick() {
    if (
      firstName == null ||
      firstName == "" ||
      format.test(firstName) ||
      firstName.length < 4
    ) {
      alert("Name is Not Valid!");
    } else if (
      lastName == null ||
      lastName == "" ||
      format.test(lastName) ||
      lastName.length < 4
    ) {
      alert("LastName is Not Valid!");
    } else if (age < 0 || age == 0) {
      alert("Age is Always Positive!");
    } else if (address == null || address == "") {
      alert("Enter Address Where You Leave");
    } else {
      let obj = {};
      obj.firstName = firstName;
      obj.lastName = lastName;
      obj.age = age;
      obj.selectSubject = selectSubject;
      obj.selectGender = selectGender;
      obj.address = address;
      obj.dob = dob;
      obj.password = password;
      arr.push(obj);
      loginRef.current.style.display = "block";
      props.data(obj);
    }
  }

  function handleReset() {
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    ageRef.current.value = 0;
    addressRef.current.value = "";
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="App">
      <h1>Register Page</h1>
      <form className="myform">
        <div>First Name: </div>
        <input
          type="text"
          id="firstname"
          ref={firstNameRef}
          onChange={hanldeFirstName}
        />
        <br />
        <br />
        <div>Last Name: </div>
        <input
          type="text"
          id="lastname"
          ref={lastNameRef}
          onChange={handleLastName}
        />
        <br />
        <br />
        <div>Age: </div>
        <input
          type="number"
          id="age"
          ref={ageRef}
          onChange={handleAge}
          min="0"
        />
        <br />
        <br />
        <div>Select Course: </div>

        <select id="dorpdown" value={selectSubject} onChange={handleDropDown}>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Compuer Science">Computer Science</option>
          <option value="Applied Machine Learning">
            Applied Machine Learning
          </option>
        </select>

        <br />
        <br />
        <div id="gender" value={selectGender} onChange={handleRadioBtn}>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>
        <br />

        <div>Address</div>

        <textarea
          id="textArea"
          ref={addressRef}
          onChange={handleAdress}
        ></textarea>
        <br />
        <br />
        <div>DOB</div>

        <input
          type="date"
          onChange={handleDob}
          min="2000-01-01"
          max="2022-10-11"
        />
        <br />
        <br />
        <div>Password</div>
        <input type="password" onChange={handlePasswordChange} />
        <br />
        <br />
        <div className="buttons">
          <div className="button">
            <input type="button" value="Submit" onClick={handleClick} />
          </div>
          <div className="button login" ref={loginRef}>
            <input
              type="button"
              value="Login"
              onClick={() => navigate("/login")}
            />
          </div>
          <div className="button">
            <input type="button" value="Reset" onClick={handleReset} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
