import { GET, POST } from "./api";
import { ReadObject, SaveObject } from "./storage";

/**
 * Cadastro de usuário no banco central.
 */
export const DoRegister = async (params) => {
  const response = await POST("/users", params, false, params.institution);

  return response;
};

/**
 * Login de usuário com verificação no banco da instituição.
 */
export const DoLogin = async (params) => {
  const response = await POST(
    "/auth/local",
    { identifier: params.identifier, password: params.password },
    false,
    params.institution
  );
  if (response?.jwt) {
    await SaveObject("authentication", response);
    sessionStorage.setItem("universitySigla", response.user.institution);
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
  return await POST(`/auth/forgot-password`, params);
};

/**
 * Redefinição de senha com token recebido por email.
 */
export const DoResetPassword = async (params) => {
  return await POST(`/auth/reset-password`, params);
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
