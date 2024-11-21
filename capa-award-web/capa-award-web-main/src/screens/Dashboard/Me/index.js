import React, { useContext, useEffect, useState } from "react";
import {
  DashboardAnimation,
  DashboardTitle,
  DashboardText,
  DashboardInput,
  DashboardButton,
  DarboardUserImage,
  DarboardUserImageAction,
  DarboardUserImageActionIcon,
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import { CoreContext } from "context/CoreContext";
import moment from "moment";
import Input from "components/Form/Input";
import Button from "components/Form/Button";
import { parseStrapiImage } from "utils";
import UploadFile from "components/Form/UploadFile";
import { ReadMe, RemoveMe, UpdateMe } from "services/me";
import { toast } from "react-toastify";
import { DoLogout } from "services/authentication";
import { useHistory } from "react-router-dom";
import { Load } from "ui/styled";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

export default function DashboardMe() {
  const history = useHistory();
  const navigate = (to) => history.push(`/${to}`);

  const { user, setUser } = useContext(CoreContext);

  const [preview, setPreview] = useState(
    user?.image?.url ? parseStrapiImage(user?.image?.url) : null
  );
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [openModal, setOpenModal] = useState(false); // State to control the modal
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    password: "",
    phone: user.phone || "",
    capes: user.capes || "",
    ppg: user.ppg || "",
    orcid: user.orcid || "",
  });

  const exit = async () => {
    await DoLogout();
    navigate("login");
  };

  const takePic = async (result) => {
    setFetching(true);
    if (result?.id) {
      await UpdateMe({ image: result.id });
      setPreview(parseStrapiImage(result?.url));
    }
    setFetching(false);
  };

  const init = async () => {
    setLoading(true);
    const result = await ReadMe();
    console.log(result);
    if (result?.id) {
      setUser(result);
      if (result?.image?.url) {
        setPreview(parseStrapiImage(result?.image?.url));
      }
    }
    setLoading(false);
  };

  const removeAccount = async () => {
    setLoading(true);
    await RemoveMe(user.id);
    toast.error("Conta excluída com sucesso");
    exit();
    setLoading(false);
  };

  const handleEdit = () => setOpenModal(true); 

  const handleSave = async () => {
    setLoading(true);
    await UpdateMe(formData);
    toast.success("Dados atualizados com sucesso!");
    setUser({ ...user, ...formData });
    setOpenModal(false);
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    init();
  }, []);


  return (
    <>
      <ContainerAuthenticated>
        <Row>
          <Col></Col>
          <Col sm={12} md={4}>
            <DarboardUserImage image={preview ? preview : "/images/no-user.png"}>
              <UploadFile onChange={takePic} onPreview={setPreview}>
                {fetching ? <Load /> : null}
                <DarboardUserImageAction>
                  <DarboardUserImageActionIcon />
                </DarboardUserImageAction>
              </UploadFile>
            </DarboardUserImage>
            <DashboardInput>
              <Input placeholder="Nome" value={user.name} readOnly />
            </DashboardInput>
            <DashboardInput>
              <Input placeholder="Email" value={user.email} readOnly />
            </DashboardInput>
            <DashboardText centred>
              Usuário desde {moment(user.created_at).format("DD/MM/YYYY")}
            </DashboardText>
            <DashboardButton onClick={removeAccount}>
              <Button loading={loading} secondary>
                Excluir Conta
              </Button>
            </DashboardButton>
            <DashboardButton onClick={handleEdit}>
              <Button loading={loading}>Editar Dados</Button>
            </DashboardButton>
          </Col>
          <Col></Col>
        </Row>
      </ContainerAuthenticated>

      {/* Modal for editing data */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)} fullWidth>
        <DialogTitle>Editar Dados</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Senha"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Telefone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="CAPES"
            name="capes"
            value={formData.capes}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="PPG"
            name="ppg"
            value={formData.ppg}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="ORCID"
            name="orcid"
            value={formData.orcid}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)} secondary>
            Cancelar
          </Button>
          <Button onClick={handleSave} loading={loading}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
