/* Esse arquivo tem a lógica de autenticar o token na API do spotify e possui
	a função getArtist que pega um artista da API do Spotify*/
import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3030/api", // ajuste o URL conforme necessário
	withCredentials: true,
});

/**
 *
 * @param {String} email
 * @param {String} password
 * @details : Na página do github, diz que se o login for um sucesso, nada será
 * retornado. Logo, não faz sentido pegar o retorno de api.post, só se quisermos
 * verificar o status da requisição (204 é sucesso).
 */
export const login = async (email, password) => {
	try {
		const response = await api.post("/users/login", { email, password });
		console.log("Resposta do login:", response.status);
		localStorage.setItem('user', email);
	} catch (error) {
		console.log(error.response?.data);
		console.error("Erro ao fazer login:", error);

		if (error.response) {
			const errorMessage =
				error.response.data?.message || "Ocorreu um erro inesperado.";
			if (error.response.status === 401) {
				if (errorMessage.includes("senha")) {
					throw new Error("Senha Incorreta");
				} else if (errorMessage.includes("email")) {
					throw new Error("Conta inexistente");
				}
			} else if (error.response.status === 404) {
				throw new Error("Conta inexistente");
			}
		}
		throw new Error("Ocorreu um erro inesperado.");
		//throw new Error("Erro ao fazer login, verifique suas credenciais");
	}
};

export const register = async (name, email, password, role = "user") => {
	console.log({ name, email, password, role });
	try {
		const response = await api.post("/users/", {
			name,
			email,
			password,
			role,
		});
		console.log(response.status);
		return response.data;
	} catch (error) {
		throw new Error("Erro ao cadastrar. Tente novamente.");
	}
};

//Função para atualizar o usuário

export const updateUser = async (id, data) => {
	try {
		const response = await api.put(`/users/${id}`, data);
		console.log("Resposta da atualização:", response.status);
	} catch (error) {
		console.log(error.response?.data);
		console.error("Erro ao atualizar usuário:", error);

		if (error.response) {
			const errorMessage =
				error.response.data?.message || "Ocorreu um erro inesperado.";
			throw new Error(errorMessage);
		} else {
			throw new Error("Ocorreu um erro inesperado.");
		}
	}
};


export const logout = async () => {
	try {
		await api.post("/users/logout");
		return "Fez logout com sucesso";
	} catch (error) {
		console.log(error.response?.data);
		console.log("Erro ao fazer logout", error);
		throw Error("Logout falhou");
	}
};

/**
 * @param {String} artistId
 * @returns {Object}
 */
export async function getArtist(artistId) {
	try {
		const response = await api.get(`/artists/${artistId}`);
		return response.data;
	} catch (error) {
		console.error("Erro ao obter o artista", error);
		throw error;
	}
}

export async function getArtistTracks(artistId) {
	try {
		const response = await api.get(`/songs/artist/${artistId}`);
		return response.data;
	} catch (error) {
		console.error("Erro ao obter as tracks do artista", error);
		throw error;
	}
}

export async function getCurrentUser() {
	try {
		const user = await api.get("/users/user");
		return user.data;
	} catch (error) {
		console.error("Erro ao obter o usuário atual", error);
		throw error;
	}
}
