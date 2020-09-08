import React from "react";

export default function signUpForm() {
    return (
        <div>
            <form>
                <label for="first_name">First Name</label> <br />
                <input type="text" name="first_name" /> <br />
                <label for="last_name">Last Name</label> <br/>
                <input type="text" name="last_name" /> <br />
                <label for="email">Email</label> <br/>
                <input type="email" name="email" /> <br />
                <label for="password">Password</label> <br/>
                <input type="password" name="password" /> <br />
                <label for="phone">Phone #</label> <small>*Optional</small> <br/>
                <input type="text" name="phone_number" /> <br />
                <label for="Admin">Admin?</label> <br/>
                <input type="checkbox" name="admin?" /> <br />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}