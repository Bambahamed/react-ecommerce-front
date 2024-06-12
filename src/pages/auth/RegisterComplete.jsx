import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import { signInWithEmailLink, updatePassword } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createOrUpdateUser } from "../../functions/auth";
const RegisterComplete = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    const storedEmail = window.localStorage.getItem("emailForRegistration");
    if (storedEmail) {
      setEmail(storedEmail);
    }
    console.log(window.location.href);
    console.log(storedEmail);
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning("Email and Password is required");
      return;
    }
    if (password.length < 6) {
      toast.warning("Password must be at least 6 characters long");
      return;
    }
    try {
      const result = await signInWithEmailLink(
        auth,
        email,
        window.location.href
      );
      /*    console.log("RESULT", result); */

      if (result.user.emailVerified) {
        // Remove user email from local Storage
        window.localStorage.removeItem("emailForRegistration");

        // Get user Id token
        let user = auth.currentUser;
        const newPassword = password;
        await updatePassword(user, newPassword);
        const idTokenResult = await user.getIdTokenResult();
        // Redux store
        console.log("user", user, "idTokenResult", idTokenResult);
        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            console.log(res);
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.name,
                email: res.email,
                token: idTokenResult.token,
                role: res.role,
                _id: res._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
        disabled
      />
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
      />
      <button type="submit" className="btn btn-dark mt-3">
        Complete Registration
      </button>
    </form>
  );
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
