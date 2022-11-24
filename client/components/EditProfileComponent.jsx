import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter,
    useLocation,
} from "react-router-dom";

function EditProfileComponent() {
  let {first_name, last_name, showemail, resident_alum, cohort_location, cohort_num, city, linkedin, employed, employer, salary, showsalary} = {};
  const userEmail = window.localStorage.getItem("email");

  useEffect(() => {
    axios.get('/api/signin', {params: {email: userEmail}}).then((data) => {
    // const user = data.find(user=>user.email === userEmail);
    ({first_name, last_name, showemail, resident_alum, cohort_location, cohort_num, city, linkedin, employed, employer, salary, showsalary} = data.data);
    setFirstName(first_name)
    setLastName(last_name)
    setresidentAlum(resident_alum)
    setEmployed(employed)
    setEmployer(employer)
    setShowSalary(showsalary)
    setShowEmail(showemail);
    // setNewCity(city);
    setLinkedin(linkedin);
    setSalary(money);
    setCohortNum(cohort_num);
    setCohortLocation(cohort_location);
    setNewCity(city); 
  })
  }, [])

  const [firstName, setFirstName] = useState(first_name);
  console.log(firstName);
  const [lastName, setLastName] = useState(last_name);
  const [residentAlum, setresidentAlum] = useState(resident_alum);
  const [_employed, setEmployed] = useState(employed);
  const [_employer, setEmployer] = useState(employer);
  const [_showSalary, setShowSalary] = useState(showsalary);
  const [_showEmail, setShowEmail] = useState(showemail);
  const [linkedLink, setLinkedin] = useState(linkedin);
  const [money, setSalary] = useState(salary);
  const [cohortNum, setCohortNum] = useState(cohort_num);
  const [cohortLocation, setCohortLocation] = useState(cohort_location);
  const [newCity, setNewCity] = useState(city)
    // const text =   "SELECT email FROM users WHERE email = '" + connection.escape(email) + "'";
    const handleSubmit = (e) => {
      //example: user.firstName = e.target.firstName.value
      e.preventDefault();
      axios.put('/api/updateUser', {
      // if (!user) return res.status(404).json({ message: 'User Not Found' });
      email: window.localStorage.getItem("email"),
      first_name : e.target.firstName.value,
      last_name : e.target.lastName.value,
      showemail : e.target.emailVisibility.value,
      resident_alum : e.target.residentAlum.value,
      cohort_location : e.target.cohortLocation.value,
      cohort_num : e.target.cohortNum.value,
      city : e.target.city.value,
      linkedin : e.target.linkedin.value,
      employed : e.target.employed.value,
      employer : e.target.employer.value,
      salary : e.target.salary.value,
      showsalary : e.target.salaryVisibility.value
    }).catch((err) => console.error(err))
  }

    const [home, setHome] = useState(false);
    function goHome() {
        setHome(true);
    }

    const directHome = [];
    if (home) {
        directHome.push(<Redirect to='/home'/>)
    }

  return (
    <div>
        <button onClick={goHome}> Go home </button> 
        <h1 id='editProfileHeading'> Edit Profile Here </h1>
        <form onSubmit={handleSubmit} id='formBox'>
        <label for='firstName'>First name:</label>
          <input type='text' id='firstName' placeholder='first name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required></input>

          <label for='lastName'>Last name:</label>
          <input type='text' id='lastName' placeholder='last name' value={lastName} onChange={(e) => setLastName(e.target.value)} required></input>

          <div className='visibility'>
            <label for='emailVisibility'>Make your email visible to other Codesmith residents/alumn?<br></br></label>
            <input type='checkbox' checked={_showEmail} value={_showEmail} onChange={() => setShowEmail((_showEmail) => !_showEmail)} id='emailVisibility'></input>
          </div>

          <label for='residentAlum'>Resident/Alumni:<br></br></label>
          <select id='residentAlum'>
            <option value="resident">Resident</option>
            <option value="alumni">Alumni</option>
          </select>

          <label for='cohortLocation'> Cohort Location: </label>
          <select id='cohortLocation'>
            <option value="WCRI">West Coast Immersive</option>
            <option value="ECRI">East Coast Immersive</option>
            <option value="CRI">Central Immersive</option>
            <option value="PTRI">Part Time Immersive</option>
          </select>

          <label for='cohortNum'>Cohort Number:<br></br></label>
          <input type='number' id='cohortNum' placeholder='Cohort Number' value={cohortNum} onChange={(e) => setCohortNum(e.target.value)} required></input>

          <label for='city'>City:<br></br></label>
          <input type='text' id='city' placeholder='City' value={newCity} onChange={(e) => setNewCity(e.target.value)} required></input>

          <label for='linkedin'>LinkedIn:<br></br></label>
          <input type='url' id='linkedin' placeholder='Linkedin' value={linkedLink} onChange={(e) => setLinkedin(e.target.value)} required></input>

          <label for='employed'> Employment Status: </label>
          <select id='employed'
            value={_employed}
            onChange={(e) => setEmployed(e.target.value)}>
            <option value="false">Currently Unemployed</option>
            <option value="true">Currently Employed</option>
          </select>

          <label for='employer'>Employer:<br></br></label>
          <input type='text' id='employer' placeholder='Job Title' disabled={_employed === "false" ? true : false}
            className={_employed === "false" ? "bg-gray-100 text-center" : ""}
            value={_employed === "false" ? "N/A" : _employer} onChange={(e) => setEmployer(e.target.value)} required></input>

          <label for='salary'>Current Salary:<br></br></label>
          <input type='number' id='salary' placeholder='Current Salary' min='0' value={money} onChange={(e)=>setSalary(e.target.value)} required></input>

          <div className='visibility'>
            <label for='salaryVisibility'>Make your salary visible to other Codesmith residents/alumn?<br></br></label>
            <input type='checkbox' checked={_showSalary} value={_showSalary} onChange={() => setShowSalary((_showSalary) => !_showSalary)} id='salaryVisibility'></input>
          </div>

          <button id='submitButton' type='submit'>Save Changes</button>
        </form>
        {directHome}
    </div>
  )
}

export default withRouter(EditProfileComponent);