import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Register.module.css";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import Path from "../../constants/paths";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirm-password",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const [error, setError] = useState("");
  const { values, onChange, onSubmit } = useForm(
    async () => {
      try {
        setError(""); // Clear previous errors
        await registerSubmitHandler(values);
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else if (error.message) {
          setError(error.message); // Use the actual error message
        } else {
          setError("An error occurred during login.");
        }
      }
    },
    {
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.ConfirmPassword]: "",
    }
  );

  return (
    <section id="register-page" className="content auth">
      <form className={styles.form} id="register" onSubmit={onSubmit}>
        <div className={styles.container}>
          <div className="brand-logo"></div>
          <h1>Register</h1>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="mariya@email.com"
            onChange={onChange}
            values={values[RegisterFormKeys.Email]}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="register-password"
            onChange={onChange}
            values={values[RegisterFormKeys.Password]}
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={onChange}
            values={values[RegisterFormKeys.ConfirmPassword]}
          />

          {error && <p className={styles.errorMessage}>{error}</p>}

          <div className={styles.float}>
            <div className={styles.floatLeft}>
              <input className="btn submit" type="submit" value="Register" />
            </div>
            <div className={styles.floatRight}>
              <p className={styles.field}>
                <span>
                  If you already have profile click{" "}
                  <Link className={styles.link} as={Link} to={Path.Login}>
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
}
