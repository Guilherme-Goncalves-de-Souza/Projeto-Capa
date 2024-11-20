import { ReadObject, SaveObject } from "./storage";

const ENDPOINTS = {
  localhost: "http://localhost:1337", // Painel padrão (banco centralizado)
  "setipr.net.br": "https://award_api.setipr.net.br",
  UFPR: "http://localhost:1340", // Universidade Federal do Paraná
  UEM: "http://localhost:1339", // Universidade Estadual de Maringá
  UEL: "http://localhost:1338", // Universidade Estadual de Londrina
};

/**
 * Retorna o endpoint apropriado com base na sigla da universidade ou no domínio atual.
 * A prioridade é da universidade salva na `session` após login.
 * Caso `localhost` seja passado explicitamente, ele será usado como padrão.
 */
const envEndpoint = (universitySigla = "") => {
  if (universitySigla && ENDPOINTS[universitySigla]) {
    return ENDPOINTS[universitySigla];
  }

  return (
    Object.keys(ENDPOINTS)
      .filter((fit) => `${window.location.origin}`.indexOf(fit) !== -1)
      .map((key) => ENDPOINTS[key])[0] || ENDPOINTS["localhost"]
  );
};

export const API_ENDPOINT = envEndpoint();

export const FRONTEND_ENDPOINT = "https://award.setipr.net.br/";

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
export const ServerFetch = async (url, options, authenticated = false, universitySigla = "") => {
  const apiEndpoint = envEndpoint(universitySigla); // Escolhe o endpoint correto
  const { headers } = await GetHeaders(authenticated);

  try {
    const response = await fetch(`${apiEndpoint}${url}`, { ...options, headers });

    if (response.status === 403 && authenticated) {
      // Se o token estiver inválido, remove do armazenamento local.
      await SaveObject("authentication", {});
    }

    try {
      return await response.json();
    } catch (err) {
      console.error("Erro ao parsear resposta do servidor:", err);
      return { error: true, message: response };
    }
  } catch (error) {
    console.error("Erro no ServerFetch:", error);
    return false;
  }
};

/**
 * Métodos de requisição HTTP (GET, POST, PUT, DELETE).
 */
export const GET = async (path, authenticated = false, universitySigla = "") =>
  await ServerFetch(path, { method: "GET" }, authenticated, universitySigla);

export const POST = async (path, body, authenticated = false, universitySigla = "") =>
  await ServerFetch(
    path,
    { method: "POST", body: JSON.stringify(body) },
    authenticated,
    universitySigla
  );

export const PUT = async (path, body, authenticated = false, universitySigla = "") =>
  await ServerFetch(
    path,
    { method: "PUT", body: JSON.stringify(body) },
    authenticated,
    universitySigla
  );

export const DELETE = async (path, authenticated = false, universitySigla = "") =>
  await ServerFetch(path, { method: "DELETE" }, authenticated, universitySigla);

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
