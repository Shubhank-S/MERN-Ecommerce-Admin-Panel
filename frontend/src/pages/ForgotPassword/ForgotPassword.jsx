import { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [secretAnswer, setSecretAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `http://localhost:8080/api/v1/user/forgotpassword`,
      { email, secretAnswer ,newPassword}
    );
    if ((!email, !secretAnswer ,!newPassword)) {
      toast.error(`Please Fill all the entries`);
    }
    if (response.status === 200) {
      navigate("/login");
      toast.success(`Login Succesfull`);
    }
  };
  return (
    <div className="forgotpassword">
      <form className="forgotpassword_form" onSubmit={handleForgotPassword}>
        <h1>Reset your password</h1>
        <input
          type="email"
          placeholder="Enter your Email...."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the secret answer...."
          onChange={(e) => setSecretAnswer(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your New Password...."
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button>Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
