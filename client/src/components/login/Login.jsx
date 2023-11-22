import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

const loginFormKeys = {
  email: "email",
  password: "password",
};

const Login = () => {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [loginFormKeys.email]: "",
    [loginFormKeys.password]: "",
  });

  return (
    <section id="login-page" className="auth">
      <form id="login" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name={loginFormKeys.email}
            placeholder="Sokka@gmail.com"
            onChange={onChange}
            value={values[loginFormKeys.email]}
          />

          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="login-password"
            name={loginFormKeys.password}
            onChange={onChange}
            value={values[loginFormKeys.password]}
          />
          <input type="submit" className="btn submit" value="Login" />
          <p className="field">
            <span>
              If you don't have profile click <a href="#">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
