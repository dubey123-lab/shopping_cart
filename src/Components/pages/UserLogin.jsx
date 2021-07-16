import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import "../Css/userLogin.css";
import LoginContext from "../../Context/Login"

const UserLogin = () => {
    const [userValue, setuserValue] = useState({
        email: "",
        password: "",
    });

    const [userData, setuserData] = useState([]);
    const context = useContext(LoginContext);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        /// create object
        setuserValue({ ...userValue, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userValue.email === "" && userValue.password === "") {
            alert("enter user Email and password ");
        } else {
            const newRecord = { ...userValue, id: new Date().getTime().toString() };
            localStorage.setItem("uservalue", JSON.stringify(newRecord));
            context.setUserData(newRecord)
            setuserData([...userData, newRecord]);
        }
    };

    if (context.userData) {
        return <Redirect to="/home_layout" />;
    }

    return (
        <>
            <div className="div1">
                <div className="form-div">
                    <form onSubmit={handleSubmit}>
                        <div className="input-div">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                value={userValue.email}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>

                        <div className="input-div">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={userValue.password}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>

                        <button type="submit" className="btn-submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UserLogin;
