import { GET, POST } from "./api";
import { ReadObject, SaveObject } from "./storage";

const BASE_ENDPOINT = "http://localhost:1337"; // Todos os métodos aqui usarão esse endpoint fixo.

/**
 * Cadastro de usuário no banco central.
 */
export const DoRegister = async (params) => {
  return await POST(`${BASE_ENDPOINT}/users`, params);
};

/**
 * Login de usuário com verificação no banco da instituição.
 */
export const DoLogin = async (params) => {
  const response = await POST(`${BASE_ENDPOINT}/auth/local`, params);

  if (response?.jwt) {
    await SaveObject("authentication", response);
    const universitySigla = response?.institution;
    sessionStorage.setItem("universitySigla", universitySigla);
    if (universitySigla) {
      const userResponse = await GET(`/users/me`, true, universitySigla);

      if (userResponse?.confirmed) {
        return response;
      } else {
        await SaveObject("authentication", {});
        sessionStorage.removeItem("universitySigla");
        return { error: true, message: "Usuário não confirmado na instituição." };
      }
    } else {
      return { error: true, message: "Instituição não encontrada." };
    }
  }
  return response;
};

/**
 * Logout de usuário.
 */
export const DoLogout = async () => {
  await SaveObject("authentication", {}); 
  sessionStorage.removeItem("universitySigla");
  return true;
};

/**
 * Solicitação de redefinição de senha (envio de email).
 */
export const DoForgotPassword = async (params) => {
  return await POST(`${BASE_ENDPOINT}/auth/forgot-password`, params);
};

/**
 * Redefinição de senha com token recebido por email.
 */
export const DoResetPassword = async (params) => {
  return await POST(`${BASE_ENDPOINT}/auth/reset-password`, params);
};

/**
 * Verifica se o usuário está logado (token JWT presente e válido).
 */
export const IsLogged = async () => {
  const authentication = await ReadObject("authentication");
  return !!authentication?.jwt;
};

/**
 * Obtém as informações do usuário autenticado.
 */
export const ReadMe = async () => {
  return await GET(`/users/me`, true);
};
