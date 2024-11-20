import { POST } from "./api";

/**
 * Envia o e-mail de confirmação de registro para o usuário
 * @param {string} email - Email do usuário
 */
export const SendRegistrationConfirmationEmail = async (email) => {
  try {
    const response = await POST("/auth/send-email-confirmation", { email });
    return response; 
  } catch (error) {
    console.error("Erro ao enviar email de confirmação:", error);
    throw error; 
  }
};

/**
 * Envia o e-mail de recuperação de senha para o usuário
 * @param {string} email - Email do usuário
 */
export const SendForgotPasswordEmail = async (email) => {
  try {
    const response = await POST("/auth/forgot-password", { email });
    return response; 
  } catch (error) {
    console.error("Erro ao enviar email de recuperação de senha:", error);
    throw error; 
  }
};
