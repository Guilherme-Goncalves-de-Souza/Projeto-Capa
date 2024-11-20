import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { FormTitle, FormText, FormSpacer } from "./styled";

import Button from "components/Form/Button";
import Input from "components/Form/Input";

import ContainerUnauthenticated from "containers/Unauthenticated";
import { isEmail } from "utils/validation";
import { SendForgotPasswordEmail } from "services/email";

export default function Forgot() {
  const history = useHistory();
  const navigate = (to) => history.push(`/${to}`);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

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

    return true;
  };

  const action = async () => {
    if (!valid(true)) return;

    setLoading(true);
    try {
      await SendForgotPasswordEmail(formValue("email")?.trim());
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
        <Button primary small loading={loading} onClick={action}>
          Prosseguir
        </Button>
        {/* <Button primary outline onClick={() => history.goBack()}>Voltar</Button> */}
      </ContainerUnauthenticated>
    </>
  );
}
