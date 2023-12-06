import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";

import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import Path from "../../constants/paths";

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
      <form className={styles.form} id="login" onSubmit={onSubmit}>
        <div className={styles.container}>
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

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name={loginFormKeys.password}
            onChange={onChange}
            value={values[loginFormKeys.password]}
          />

          <div className={styles.float}>
            <div className={styles.floatLeft}>
              <input type="submit" className="btn submit" value="Login" />
            </div>
            <div className={styles.floatRight}>
              <p className={styles.field}>
                <span>
                  If you don't have profile click{" "}
                  <Link className={styles.link} as={Link} to={Path.Register}>
                    here
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
