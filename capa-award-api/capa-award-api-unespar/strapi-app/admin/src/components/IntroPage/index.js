import React, { useState } from "react";

const IntroPage = () => {
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const institutions = [
    {
      name: "UFPR - Universidade Federal do Paraná",
      url: "http://localhost:1340/admin/login",
    },
    {
      name: "UEM - Universidade Estadual de Maringá",
      url: "http://localhost:1339/admin/login",
    },
    {
      name: "UEL  - Universidade Estadual de Londrina",
      url: "http://localhost:1338/admin/login",
    },
    { name: "Painel Padrão", url: "http://localhost:1337/admin/login" },
  ];

  const handleRedirect = () => {
    if (selectedInstitution) {
      window.location.href = selectedInstitution;
    } else {
      alert("Selecione uma instituição!");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Selecione a Instituição</h1>
      <select
        onChange={(e) => setSelectedInstitution(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px", fontSize: "16px" }}
      >
        <option value="">Escolha uma Instituição</option>
        {institutions.map((inst, index) => (
          <option key={index} value={inst.url}>
            {inst.name}
          </option>
        ))}
      </select>
      <br />
      <button
        onClick={handleRedirect}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Acessar Login
      </button>
    </div>
  );
};

export default IntroPage;
