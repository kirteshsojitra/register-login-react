import {useState} from "react";
import "./login.css";

const Login = (props) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  function handleChange(e) {
    setName(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSignUp() {
    let newArr = props.sendData.filter(
      (item) => item.firstName == name && item.password == password
    );
    if (newArr == "") {
      alert("Name And Password is Not Valid!");
    } else {
      alert(`Thank You For Login ${name}!`);
    }
  }

  return (
    <div className="App">
      <h1>Login Page</h1>
      <form className="myform">
        <div>First Name: </div>
        <input type="text" id="firstname" onChange={handleChange} />
        <br />
        <br />
        <div>Password</div>
        <input type="password" onChange={handlePassword} />
        <br />
        <br />

        <div className="buttons">
          <input type="button" value="Sign Up" onClick={handleSignUp} />
        </div>
      </form>
    </div>
  );
};

export default Login;
