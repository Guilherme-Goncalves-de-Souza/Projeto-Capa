import { POST } from "./api";

/**
 * Envia o e-mail de confirmação de registro para o usuário, utilizando a instituição correspondente.
 * @param {string} email 
 * @param {string} institution 
 */
export const SendRegistrationConfirmationEmail = async (email, institution) => {
  try {
    const response = await POST(`/${institution}/auth/send-email-confirmation`, { email });
    return response;
  } catch (error) {
    console.error(`Erro ao enviar email de confirmação para ${institution}:`, error);
    throw error;
  }
};

/**
 * Envia o e-mail de recuperação de senha para o usuário, utilizando a instituição correspondente.
 * @param {string} email 
 * @param {string} institution 
 */
export const SendForgotPasswordEmail = async (email, institution) => {
  try {
    const response = await POST(`/${institution}/auth/forgot-password`, { email });
    return response;
  } catch (error) {
    console.error(`Erro ao enviar email de recuperação de senha para ${institution}:`, error);
    throw error;
  }
};
