import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../redux/actions";

function Signout() {
  const islogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  function logout() {
    //  IMPORTANT!! Axios does not send cookies by default (cookies contain session)
    //  Must include {withCredentials: true} to send cookie
    axios.get("http://localhost:9000/logout", { withCredentials: true }).then((response) => {
      dispatch(signout());
      console.log(response);
    });
  }

  return <button onClick={logout}>Sign Out</button>;
}
export default Signout;
