import { ReadObject, SaveObject } from "./storage";

const BASE_URL = process.env.REACT_APP_MASTER_API_URL || "https://master.capaaward.com.br";

const ENDPOINTS = {
  master: BASE_URL,
  UFPR: process.env.REACT_APP_UFPR_API || "https://ufpr.capaaward.com.br",
  UEM: process.env.REACT_APP_UEM_API || "https://uem.capaaward.com.br",
  UEL: process.env.REACT_APP_UEL_API || "https://uel.capaaward.com.br",
  UEPG: process.env.REACT_APP_UEPG_API || "https://uepg.capaaward.com.br",
  UNIOESTE: process.env.REACT_APP_UNIOESTE_API || "https://unioeste.capaaward.com.br",
  UNICENTRO: process.env.REACT_APP_UNICENTRO_API || "https://unicentro.capaaward.com.br",
  UENP: process.env.REACT_APP_UENP_API || "https://uenp.capaaward.com.br",
  UNESPAR: process.env.REACT_APP_UNESPAR_API || "https://unespar.capaaward.com.br",
};

/**
 * Retorna o endpoint apropriado com base no domínio atual ou na sigla da universidade.
 * A prioridade é da sigla da universidade.
 */
const envEndpoint = (universitySigla) => {
  const siglaFromSession = universitySigla || ReadObject("universitySigla");

  if (siglaFromSession && ENDPOINTS[siglaFromSession]) {
    return ENDPOINTS[siglaFromSession];
  }

  return ENDPOINTS["master"]; // Se não houver sigla, utiliza o master.
};

export const API_ENDPOINT = envEndpoint();

/**
 * Define o endpoint do frontend
 */
export const FRONTEND_ENDPOINT =
  process.env.REACT_APP_FRONTEND_URL || "https://award.setipr.net.br/";

/**
 * Obtém os headers padrão para requisições.
 * Caso `authenticated` seja `true`, tenta adicionar o token JWT armazenado.
 */
export const GetHeaders = async (authenticated) => {
  const headers = { "Content-Type": "application/json" };
  const authentication = await ReadObject("authentication");

  if (authenticated && authentication?.jwt) {
    headers.Authorization = `Bearer ${authentication.jwt}`;
  }

  return { headers };
};

/**
 * Função genérica para realizar fetch ao servidor.
 * Ajusta o endpoint dinamicamente com base na sigla da universidade.
 */
export const ServerFetch = async (url, options, authenticated = false, universitySigla) => {
  const apiEndpoint = envEndpoint(universitySigla);

  // Obtém os headers padrão
  const { headers } = await GetHeaders(authenticated);

  // Garante que o Accept está configurado para JSON
  headers["Accept"] = "application/json";

  try {
    const response = await fetch(`${apiEndpoint}${url}`, { ...options, headers });

    // Força a resposta a ser interpretada como JSON
    if (response.headers.get("content-type")?.includes("application/json")) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    return { error: true, message: "Erro na requisição." };
  }
};

/**
 * Métodos de requisição HTTP (GET, POST, PUT, DELETE).
 */
export const GET = async (path, authenticated = false, universitySigla) => {
  return await ServerFetch(path, { method: "GET" }, authenticated, universitySigla);
};

export const POST = async (path, body, authenticated = false, universitySigla) => {
  const result = await ServerFetch(
    path,
    { method: "POST", body: JSON.stringify(body) },
    authenticated,
    universitySigla
  );
  return result;
};

export const PUT = async (path, body, authenticated = false, universitySigla) => {
  return await ServerFetch(
    path,
    { method: "PUT", body: JSON.stringify(body) },
    authenticated,
    universitySigla
  );
};

export const DELETE = async (path, authenticated = false, universitySigla) => {
  return await ServerFetch(path, { method: "DELETE" }, authenticated, universitySigla);
};
/**
 * Busca endereços via CEP.
 */
export const ReadAddressesByZipCode = async (zipCode) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
    return await response.json();
  } catch (err) {
    console.error("Erro ao buscar endereço pelo CEP:", err);
    return false;
  }
};

/**
 * Upload de imagens para o servidor.
 */
export const PostImage = async (fileToUpload) => {
  const formData = new FormData();
  formData.append("files", fileToUpload, fileToUpload.name);

  const { headers } = await GetHeaders(true);
  delete headers["Content-Type"]; // FormData define automaticamente o content-type.

  try {
    const response = await fetch(`${API_ENDPOINT}/upload`, {
      method: "POST",
      body: formData,
      headers,
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao fazer upload de imagem:", error);
    return false;
  }
};

/**
 * Prepara uma imagem base64 para upload.
 */
export const PrepareImageFile = (image) => {
  const binary = window.atob(image.source);
  const array = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) {
    array[i] = binary.charCodeAt(i);
  }

  return new File([new Blob([array], { type: image.filetype })], image.filename);
};

/**
 * Faz upload de uma imagem com base em um arquivo.
 */
export const UploadImage = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async () => {
      const source = reader.result.split(",")[1];
      const image = {
        filename: file.name,
        filetype: file.type,
        source,
      };
      const preparedFile = PrepareImageFile(image);
      const result = await PostImage(preparedFile);
      resolve(result);
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Faz o parse da URL de uma imagem retornada pelo Strapi.
 */
export const parseStrapiImage = (url) => {
  return !url ? "" : url.includes("://") ? url : `${API_ENDPOINT.replace("/api", "")}${url}`;
};
