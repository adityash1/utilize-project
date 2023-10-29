import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import { googleLogout } from "@react-oauth/google";
import Lists from "./components/Lists.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const fetchProfile = async (accessToken) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        }
      );
      setProfile(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // Check if user information exists in local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      fetchProfile(user.access_token);
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem("user");
  };

  const handleCreateOrder = () => {
    console.log("I'll implement this later")
  }

  return (
    <>
      {profile ? (
          <>
              <Profile profile={profile} onLogout={logOut} />
              <button
                  type="button"
                  className="mt-2 ml-6 rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                  onClick={handleCreateOrder}
              >
                Create New Order
              </button>
            <button
                type="button"
                className="mt-2 mx-6 rounded-md bg-red-50 px-3.5 py-2.5 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-100"
                onClick={logOut}
            >
              Log Out
            </button>
            <Lists />
          </>
      ) : (
        <Login onLogin={setUser} />
      )}
    </>
  );
}

export default App;
