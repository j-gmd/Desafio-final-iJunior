import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../Register/Input";
import "./ChangeEmail.css";

const ChangeEmail = () => {
	const navigate = useNavigate();

	const links = [
		{ name: "Artistas", path: "/artists" },
		{ name: "Músicas Curtidas", path: "/liked-musics" },
		{ name: "Minha Conta", path: "/my-account" },
	];

	const handleConfirm = () => {
		// Lógica para confirmar a troca de email
	};

	const handleCancel = () => {
		navigate("/my-account");
	};

	return (
		<div className="main_content">
			<Sidebar links={links} />
			<div className="account_box">
				<div className="change_box">
					<p>Trocar E-mail</p>
					<Input tipo={"Novo E-mail"} />
					<div className="button_group">
						<button onClick={handleConfirm}>Confirmar</button>
						<button onClick={handleCancel}>Cancelar</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangeEmail;
