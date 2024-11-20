import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { FormTitle, FormText, FormSpacer, RegisterCall, CheckTerms, RegisterForgot, ForgotLink } from "./styled";
import Button from "components/Form/Button";
import Input from "components/Form/Input";
import ContainerUnauthenticated from "containers/Unauthenticated";
import { DoLogin } from "services/authentication";
import { exposeStrapiError } from "utils";
import { CoreContext } from "context/CoreContext";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export default function Login() {
  const history = useHistory();
  const navigate = (to) => history.push(`/${to}`);

  const { setUser } = useContext(CoreContext);
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

  const formValue = (ref) => {
    return form?.[ref] ? form?.[ref] : "";
  };

  const changeForm = (value, ref) => {
    setForm({ ...form, [ref]: value });
  };

  const valid = (verbose = false) => {
    if (!formValue("identifier") || !formValue("identifier").length) {
      if (verbose) {
        toast.error("Preencha o campo: Email");
      }
      return false;
    }

    if (!formValue("password") || !formValue("password").length) {
      if (verbose) {
        toast.error("Preencha o campo: Senha");
      }
      return false;
    }

    if (!formValue("institution")) {
      if (verbose) {
        toast.error("Selecione a instituição");
      }
      return false;
    }

    return true;
  };

  const login = async () => {
    if (!valid(true)) {
      return;
    }
    setLoading(true);
    const result = await DoLogin({
      ...form,
      identifier: form.identifier?.replace(/ /g, ""),
    });
    setLoading(false);
    if (result && !exposeStrapiError(result)) {
      completeLogin(result);
    }
  };

  const completeLogin = (result) => {
    setUser(result);
    navigate("dashboard");
  };

  return (
    <>
      <ContainerUnauthenticated>
        <FormTitle>Login</FormTitle>
        <FormText>Preencha os dados solicitados</FormText>
        <Input
          placeholder="Email"
          id={"identifier"}
          value={formValue("identifier")}
          onChange={(e) => changeForm(e.target.value, "identifier")}
        />
        <FormSpacer />
        <Input
          placeholder="Senha"
          id={"password"}
          type="password"
          value={formValue("password")}
          onChange={(e) => changeForm(e.target.value, "password")}
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
        <Button primary small loading={loading} onClick={login}>
          Entrar
        </Button>
        <RegisterForgot>
          <ForgotLink onClick={() => navigate("forgot")}>Esqueci a senha</ForgotLink>
        </RegisterForgot>
        <RegisterForgot lined>
          <RegisterCall> Ainda não tem conta? </RegisterCall>
          <Button nospace primary small link onClick={() => navigate("register")}>
            Criar uma conta
          </Button>
        </RegisterForgot>
      </ContainerUnauthenticated>
    </>
  );
}