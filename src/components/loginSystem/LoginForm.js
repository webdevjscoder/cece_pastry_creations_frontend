import React from "react";

export default function LoginForm({ logInUser }) {
        return (
            <div>
                <h1>Sign In</h1>
                <form>
                    <label for="email">Email</label> <br />
                    <input type="email" name="email" /> <br />
                    <label for="password">Password</label> <br/>
                    <input type="password" name="password" /> <br />
                    <input type="submit" value="Sign In" />
                </form>
            </div>
        );
}