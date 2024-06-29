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
		const response = await api.post("/users/login", {
			email,
			password,
		});
		console.log("Resposta do login:", response.status);
	} catch (error) {
		console.log(error.response?.data);
		console.error("Erro ao fazer login:", error);
		if (error.response) {
			if (error.response.status === 401) {
			  throw new Error("Senha Incorreta");
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

// Função para obter o token de acesso
async function getAccessToken() {
	try {
		const response = await axios.post(
			"https://accounts.spotify.com/api/token",
			"grant_type=client_credentials",
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Authorization:
						"Basic " +
						btoa(
							`${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${
								import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
							}`
						),
				},
			}
		);
		return response.data.access_token;
	} catch (error) {
		console.error("Erro ao obter o token de acesso:", error);
		throw error;
	}
}

// Função para obter um artista aleatório
/**
 *
 * @param {String} artistId
 * @returns an artist
 */
export async function getArtist(artistId) {
	try {
		const accessToken = await getAccessToken();

		const response = await axios.get(
			`https://api.spotify.com/v1/artists/${artistId}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		return response.data;
	} catch (error) {
		console.error("Erro ao obter o artista", error);
		throw error;
	}
}

/**
 * @param {String} artistId
 * @return tracks of the artist
 */
export async function getArtistTracks(artistId) {
	try {
		const acessToken = await getAccessToken();
		const response = await axios.get(
			`https://api.spotify.com/v1/artists/${artistId}/top-tracks`,
			{
				params: { market: "BR" },
				headers: {
					Authorization: `Bearer ${acessToken}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		console.error("Erro ao obter as tracks do artista", error);
		throw error;
	}
}
