import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { FormTitle, FormText, FormSpacer } from "./styled";

import Button from "components/Form/Button";
import Input from "components/Form/Input";

import ContainerUnauthenticated from "containers/Unauthenticated";
import { isEmail } from "utils/validation";
import { SendForgotPasswordEmail } from "services/email";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export default function Forgot() {
  const history = useHistory();
  const navigate = (to) => history.push(`/${to}`);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  const institutions = [
    { label: "UEL - Universidade Estadual de Londrina", value: "UEL" },
    { label: "UENP - Universidade Estadual do Norte do Paraná", value: "UENP" },
    { label: "UEM - Universidade Estadual de Maringá", value: "UEM" },
    { label: "UNICENTRO - Universidade Estadual do Centro-Oeste", value: "UNICENTRO" },
    { label: "UNIOESTE - Universidade Estadual do Oeste do Paraná", value: "UNIOESTE" },
    { label: "UNESPAR - Universidade Estadual do Paraná", value: "UNESPAR" },
    { label: "UFPR - Universidade Federal do Paraná", value: "UFPR" },
    { label: "UEPG - Universidade Estadual de Ponta Grossa", value: "UEPG" },
  ];

  const formValue = (ref) => form?.[ref] || "";
  const changeForm = (value, ref) => setForm({ ...form, [ref]: value });

  const valid = (verbose = false) => {
    if (!formValue("email") || !formValue("email").length) {
      if (verbose) toast.error("Preencha o campo: Email");
      return false;
    }

    if (!isEmail(formValue("email"))) {
      if (verbose) toast.error("Insira um email válido");
      return false;
    }

    if (!formValue("institution")) {
      if (verbose) toast.error("Selecione a instituição");
      return false;
    }

    return true;
  };

  const action = async () => {
    if (!valid(true)) return;

    setLoading(true);
    try {
      await SendForgotPasswordEmail(formValue("email")?.trim(), formValue("institution"));
      toast.success("Instruções para recuperação de senha foram enviadas ao seu e-mail");
      completNext();
    } catch (error) {
      toast.error("Erro ao enviar e-mail de recuperação. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  const completNext = () => {
    navigate("login");
  };

  return (
    <>
      <ContainerUnauthenticated>
        <FormTitle>Recuperar senha</FormTitle>
        <FormText>Informe o email cadastrado</FormText>
        <Input
          placeholder="Email"
          id="email"
          value={formValue("email")}
          onChange={(e) => changeForm(e.target.value, "email")}
        />
        <FormSpacer />
        <FormControl fullWidth>
          <InputLabel id="institution-select-label">Selecione a Instituição</InputLabel>
          <Select
            labelId="institution-select-label"
            id="institution-select"
            value={formValue("institution")}
            onChange={(e) => changeForm(e.target.value, "institution")}
            label="Selecione a Instituição"
          >
            {institutions.map((institution) => (
              <MenuItem key={institution.value} value={institution.value}>
                {institution.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormSpacer />
        <Button primary small loading={loading} onClick={action}>
          Prosseguir
        </Button>
      </ContainerUnauthenticated>
    </>
  );
}
