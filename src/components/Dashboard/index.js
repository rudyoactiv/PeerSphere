import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Dash from "./dash";
import Login from '../Login';

const allowedDomain = "@kiit.ac.in";
const Dashboard = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Check if the email ends with the allowed domain
                if (user.email.endsWith(allowedDomain)) {
                    setUser(user);
                } else {
                    setUser(null);
                }
            } else {
                setUser(null);
            }
        });
    }, [auth]);

    return (
        <div>
            {user ? <Dash /> : <Login />}
        </div>
    );
};

export default Dashboard;