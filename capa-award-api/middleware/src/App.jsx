import { useState } from "react";
import "./App.css";

function App() {
  const [selectedInstitution, setSelectedInstitution] = useState("");

  const institutions = [
    {
      name: "UFPR - Universidade Federal do Paraná",
      url: `${import.meta.env.VITE_API_URL_UFPR}/admin/auth/login`,
    },
    {
      name: "UEM - Universidade Estadual de Maringá",
      url: `${import.meta.env.VITE_API_URL_UEM}/admin/auth/login`,
    },
    {
      name: "UEL - Universidade Estadual de Londrina",
      url: `${import.meta.env.VITE_API_URL_UEL}/admin/auth/login`,
    },
    {
      name: "UEPG - Universidade Estadual de Ponta Grossa",
      url: `${import.meta.env.VITE_API_URL_UEPG}/admin/auth/login`,
    },
    {
      name: "Unioeste - Universidade Estadual do Oeste do Paraná",
      url: `${import.meta.env.VITE_API_URL_UNIOESTE}/admin/auth/login`,
    },
    {
      name: "Unicentro - Universidade Estadual do Centro-Oeste",
      url: `${import.meta.env.VITE_API_URL_UNICENTRO}/admin/auth/login`,
    },
    {
      name: "UENP - Universidade Estadual do Norte do Paraná",
      url: `${import.meta.env.VITE_API_URL_UENP}/admin/auth/login`,
    },
    {
      name: "Unespar - Universidade Estadual do Paraná",
      url: `${import.meta.env.VITE_API_URL_UNESPAR}/admin/auth/login`,
    },
    { name: "Painel Padrão", url: `${import.meta.env.VITE_API_URL_DEFAULT}/admin/auth/login` },
  ];

  const handleRedirect = () => {
    if (selectedInstitution) {
      window.location.href = selectedInstitution;
    } else {
      alert("Por favor, selecione uma instituição!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center w-full mb-8">
        <img src="/logo-strapi.png" alt="Logo" className="h-20" />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Bem-vindo ao Painel
        </h1>
        <p className="text-center text-gray-700 mb-4">Selecione a instituição para gerenciar</p>
        <select
          className="w-full p-3 mb-6 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSelectedInstitution(e.target.value)}
          defaultValue="">
          <option value="" disabled>
            Escolha uma Instituição
          </option>
          {institutions.map((inst, index) => (
            <option key={index} value={inst.url}>
              {inst.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleRedirect}
          className="w-full p-3 bg-cyan-600 text-white text-lg font-semibold rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500">
          Acessar Login
        </button>
      </div>
      <p className="mt-4 text-white text-center text-sm">
        Selecione a instituição para acessar o painel administrativo.
      </p>
    </div>
  );
}

export default App;
