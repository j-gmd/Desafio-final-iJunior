import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../spotify";
import Input from "../../pages/Register/Input";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await login(email, password);
			navigate("/artists");
		} catch (err) {
			setError(err.message);
		}
	};

	const handleRegister = () => {
		navigate("/register");
	};

	return (
		<div className={styles.loginPage}>
			<div className={styles.loginContainer}>
				<div className={styles.title}>iSpotify ®</div>
				<div className={styles.subtitle}>Música para todos.</div>
				{error && <div className={styles.errorMessage}>{error}</div>}
				<form onSubmit={handleLogin}>
					<Input
						tipo="Email"
						imgSrc="src/assets/mail.png"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						tipo="Senha"
						imgSrc="src/assets/lock.png"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
					/>
					<button className={styles.loginButton} type="submit">
						Entrar
					</button>
				</form>
				<p className={styles.signupText}>
					Não tem uma conta?{" "}
					<a onClick={handleRegister}>Inscreva-se</a>
				</p>
			</div>
		</div>
	);
};

export default LoginForm;
