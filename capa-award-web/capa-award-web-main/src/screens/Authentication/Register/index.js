import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { FormTitle, FormText, FormSpacer, RegisterCall, CheckTerms } from "./styled";
import Button from "components/Form/Button";
import Input from "components/Form/Input";
import ContainerUnauthenticated from "containers/Unauthenticated";
import { DoRegister } from "services/authentication";
import { exposeStrapiError } from "utils";
import Check from "components/Form/Check";
import { isEmail } from "utils/validation";
import { CoreContext } from "context/CoreContext";
import { SendRegistrationConfirmationEmail } from "services/email";
import { Dropdown } from "primereact/dropdown"; // Importe o Dropdown do PrimeReact

export default function Register() {
  const history = useHistory();
  const navigate = (to) => history.push(`/${to}`);

  const { setModal } = useContext(CoreContext);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  const institutions = [
    { label: "UEL - Universidade Estadual de Londrina", value: "UEL" },
    { label: "UENP - Universidade Estadual do Norte do Paraná", value: "UENP" },
    { label: "UEM - Universidade Estadual de Maringá", value: "UEM" },
    { label: "UNICENTRO - Universidade Estadual do Centro-Oeste", value: "UNICENTRO" },
    { label: "UNIOESTE - Universidade Estadual do Oeste do Paraná", value: "UNIOESTE" },
    { label: "UNESPAR - Universidade Estadual do Paraná", value: "UNSESPAR" },
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
    if (!formValue("terms")) {
      if (verbose) {
        toast.error("Aceite os termos");
      }
      return false;
    }

    if (!formValue("name") || !formValue("name").length) {
      if (verbose) {
        toast.error("Preencha o campo: Nome");
      }
      return false;
    }

    if (!formValue("email") || !formValue("email").length) {
      if (verbose) {
        toast.error("Preencha o campo: Email");
      }
      return false;
    }

    if (!isEmail(formValue("email"))) {
      if (verbose) {
        toast.error("Email inválido");
      }
      return false;
    }

    if (!formValue("password") || !formValue("password").length) {
      if (verbose) {
        toast.error("Preencha o campo: Senha");
      }
      return false;
    }
    if (formValue("password") !== formValue("cpassword")) {
      if (verbose) {
        toast.error("Senha e confirmação devem ser iguais");
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

  const action = async () => {
    if (!valid(true)) {
      return;
    }
    setLoading(true);

    const result = await DoRegister({
      ...form,
      username: form.email?.replace(/ /g, ""),
      email: form.email?.replace(/ /g, ""),
      phone: "",
      blocked: false,
      institution: form.institution, // Enviar a sigla da instituição
    });

    setLoading(false);
    if (result && !exposeStrapiError(result)) {
      try {
        await SendRegistrationConfirmationEmail(result.email);
      } catch (error) {
        toast.error("Erro ao registrar conta. Tente novamente mais tarde.");
      }

      completeLogin();
    }
  };

  const completeLogin = () => {
    toast.success("Conta criada com sucesso! Verifique seu e-mail para confirmar o registro.");
    navigate("login");
  };

  return (
    <>
      <ContainerUnauthenticated>
        <FormTitle>Cadastro</FormTitle>
        <FormText>Preencha os dados solicitados</FormText>
        <Input
          placeholder="Nome"
          id={"name"}
          value={formValue("name")}
          onChange={(e) => changeForm(e.target.value, "name")}
        />
        <FormSpacer />
        <Input
          placeholder="Email"
          id={"email"}
          value={formValue("email")}
          onChange={(e) => changeForm(e.target.value, "email")}
        />
        <FormSpacer />
        <Dropdown
          value={formValue("institution")}
          options={institutions}
          onChange={(e) => changeForm(e.value, "institution")}
          optionLabel="label"
          placeholder="Selecione a Instituição"
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
        <Input
          placeholder="Repita a Senha"
          id={"cpassword"}
          type="password"
          value={formValue("cpassword")}
          onChange={(e) => changeForm(e.target.value, "cpassword")}
        />
        <FormSpacer />
        <Check
          label="Li e estou de acordo com"
          value={formValue("terms")}
          onChange={(e) => changeForm(e, "terms")}
        />
        <CheckTerms>
          os <a onClick={() => setModal({ type: "terms" })}>Termos de uso</a> e{" "}
          <a onClick={() => setModal({ type: "privacity-policy" })}>políticas de privacidade</a>
        </CheckTerms>
        <FormSpacer />

        <Button primary small loading={loading} onClick={action}>
          Criar conta
        </Button>
      </ContainerUnauthenticated>
    </>
  );
}
