import "./App.css";
import React, { useState } from "react";

function App() {
  const [form, setForm] = useState([
    { firstName: "" },
    { lastName: "" },
    { email: "" },
    { gender: "" },
    { courses: "react" },
    { specialization: [] },
    {
      error: {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        specialization: "",
      },
    },
  ]);

  const submitHander = (e) => {
    // prevent form loads
    e.preventDefault();
    let ans = form.filter((ele) =>
      Object.values(ele)[0].length === 0 && Object.keys(ele)[0] !== "error"
        ? Object.keys(ele)
        : ""
    );
    ans.length > 0 && alert("please enter all the details");
  };

  const changeHandler = (e) => {
    let ind = form.findIndex((el) => Object.keys(el)[0] === e.target.name);
    // error validation
    let error = form[6]["error"];
    e.target.value === ""
      ? (error[[e.target.name]] = `Please enter ${e.target.name}`)
      : (error[[e.target.name]] = "");

    // storing form values in state
    setForm((prev) => {
      let newState = [...prev];
      if (e.target.name === "specialization") {
        let temp = newState[5]["specialization"];
        if (temp.includes(e.target.value)) {
          temp.splice(temp.indexOf(e.target.value), 1);
        } else {
          temp.push(e.target.value);
        }
        return [...newState];
      }

      if (ind === -1) {
        newState.push({ [[e.target.name]]: e.target.value });
        return [...newState];
      } else {
        newState[ind][[e.target.name]] = e.target.value;
        return [...newState];
      }
    });
  };

  return (
    <form onSubmit={submitHander}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={changeHandler}
          value={form.firstName}
        />
      </div>
      <span style={{ color: "red", fontWeight: 400, fontSize: 13 }}>
        {form[6]["error"]["firstName"]}
      </span>
      <br />
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={changeHandler}
          value={form.lastName}
        />
      </div>
      <span style={{ color: "red", fontWeight: 400, fontSize: 13 }}>
        {form[6]["error"]["lastName"]}
      </span>
      <br />
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={changeHandler}
          value={form.email}
        />
      </div>
      <span style={{ color: "red", fontWeight: 400, fontSize: 13 }}>
        {form[6]["error"]["email"]}
      </span>
      <br />
      <div>
        <label>Gender</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={changeHandler}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={changeHandler}
        />
        Female
      </div>
      <span style={{ color: "red", fontWeight: 400, fontSize: 13 }}>
        {form[6]["error"]["gender"]}
      </span>
      <br />
      <div>
        <label>Courses</label>
        <select onChange={changeHandler} name="courses" value={form.courses}>
          <option value="react">React</option>
          <option value="node">Node</option>
          <option value="mongo">Mongo</option>
        </select>
      </div>
      <br />
      <div>
        <label>Specialization </label>
        <input
          type="checkbox"
          name="specialization"
          value="Frontend"
          onChange={changeHandler}
        />
        Frontend
        <input
          type="checkbox"
          name="specialization"
          value="Backend"
          onChange={changeHandler}
        />
        Backend
        <input
          type="checkbox"
          name="specialization"
          value="FullStack"
          onChange={changeHandler}
        />
        FullStack
      </div>
      <span style={{ color: "red", fontWeight: 400, fontSize: 13 }}>
        {form[6]["error"]["specialization"]}
      </span>
      <br />
      <button type="submit">Submit</button>&nbsp;
      <button type="reset">Reset</button>&nbsp;
    </form>
  );
}

export default App;
