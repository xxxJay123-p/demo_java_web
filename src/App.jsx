import "./styles/App.css";
import { useEffect, useState } from "react";
import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Coffee from "./components/Coffee";
import Course from "./components/Course";
import Food from "./components/Food";
import Frostino from "./components/Frostino";
import Pastries from "./components/Pastries";

//pages
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import OrderHome from "./pages/OrderHome";
import PaymentReceived from "./pages/PaymentReceived";
import LoginSignup from "./pages/LoginSignup";
import Contact from "./pages/Contact";

//Test

// import Secure from './Secure'
import jwtDecode from "jwt-decode";

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  console.log("User Router: ", { authenticatedUser });

  useEffect(() => {
    if (authenticatedUser) return;

    const token = localStorage.getItem("token");

    if (token) {
      const user = jwtDecode(token);
      setAuthenticatedUser(user);
    }
  }, [authenticatedUser]);

  const handleLogout = () => {
    localStorage.removeItem("token");

    setAuthenticatedUser(null);
  };

  return (
    <div className="App">
      {/* <Header
        handleLogout={handleLogout}
        authenticatedUser={authenticatedUser}
      /> */}
      <NavigationBar
        handleLogout={handleLogout}
        authenticatedUser={authenticatedUser}
      />

      <Switch>
        {/* <Route path="/signup">
          <Signup setAuthenticatedUser={setAuthenticatedUser} />
        </Route>
        <Route path="/login">
          <Login setAuthenticatedUser={setAuthenticatedUser} />
        </Route> */}
        <Route path="/login" exact>
          <LoginSignup setAuthenticatedUser={setAuthenticatedUser} />
        </Route>
        {/* <Route path="/secure">
					{authenticatedUser ? <Secure /> : <Redirect to="/signin" />}
				</Route> */}
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/order" exact>
          <OrderHome />
        </Route>
        <Route path="/order/coffee" exact>
          <Coffee />
        </Route>
        <Route path="/order/food" exact>
          <Food />
        </Route>
        <Route path="/order/pastries" exact>
          <Pastries />
        </Route>
        <Route path="/order/frostino" exact>
          <Frostino />
        </Route>
        <Route path="/course" exact>
          <Course />
        </Route>
        <Route path="/cart">
          <Basket authenticatedUser={authenticatedUser} />
        </Route>
        {/* <Route path="/login">
					<Login />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route> */}
        <Route path="/paymentReceived">
          <PaymentReceived />
        </Route>
        <Route path="/contactus">
          <Contact />
        </Route>
        <Route path="/admin">{/* <AdminRouter> */}</Route>
      </Switch>
      <a className="back-to-top-link" href="#top-of-the-page">
        Back to top
      </a>
      <Footer />
    </div>
  );
}

export default App;
