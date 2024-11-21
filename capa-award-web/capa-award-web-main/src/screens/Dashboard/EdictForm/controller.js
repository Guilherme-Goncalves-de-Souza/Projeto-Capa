import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Create, ReadOne, Update } from "services/articles";
import { Read as ReadCredits } from "services/credits";
import { Read as ReadInstitutions } from "services/instituitions";
import { Read as ReadSectors } from "services/sectors";
import { Read as ReadModels } from "services/models";
import { exposeStrapiError, parseStrapiImage } from "utils";

import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import moment from "moment/moment";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { stateToHTML } from "draft-js-export-html";
import { CoreContext } from "context/CoreContext";
import { ReadFile } from "services/any-text";

export default function useController() {
  const history = useHistory();

  const { user } = useContext(CoreContext);

  const { id, edict_id } = useParams();
  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState(null);

  const [credtis, setCredits] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [model, setModel] = useState([]);

  const [file, setFile] = useState(null);
  const [knowledgementTerm, setKnowledgementTerm] = useState(null);

  const [coauthors, setCoauthors] = useState([]);

  const [form, setForm] = useState({
    draft: EditorState.createEmpty(),
  });
  const formValue = (ref) => {
    return form?.[ref] ? form?.[ref] : "";
  };
  const changeForm = (value, ref) => {
    setForm({ ...form, [ref]: value });
  };

  const init = async () => {
    setLoading(true);
    const result = await ReadOne(id);
    if (result && !exposeStrapiError(result)) {
      setRegister(result);
      setForm({
        ...result,
        draft: result?.draft
          ? EditorState.createWithContent(convertFromRaw(result?.draft))
          : EditorState.createEmpty(),
        created_at: moment(result?.created_at)?.format("DD/MM/YYYY"),
        date: moment(result?.date)?.format("DD/MM/YYYY"),
        time: moment(result?.date)?.format("HH:mm"),
        tags: result?.tag?.split(","),
        tag: "",
      });
    }
    setLoading(false);
  };

  const initData = async () => {
    const resultCredits = await ReadCredits();
    const resultSectors = await ReadSectors();
    const resultModels = await ReadModels();

    if (Array.isArray(resultCredits)) {
      setCredits(resultCredits.map((mm) => ({ ...mm, title: mm?.name })));
    }
    if (Array.isArray(resultSectors)) {
      setSectors(resultSectors.map((mm) => ({ ...mm, title: mm?.name })));
    }
    if (resultModels) {
      setModel(resultModels.find((ff) => ff.type === "knowledgementTerm"));
    }
  };

  const save = async () => {
    setLoading(true);
console.log(form)
    if (
      !form?.name ||
      !form?.email ||
      !form?.orcid ||
      !form?.ppg ||
      !form?.credit ||
      !form?.area
    ) {
      toast.error("Todos os campos do autor são obrigatórios, exceto coauthors.");
      setLoading(false);
      return;
    }

    if (!file) {
      toast.error("É necessário fazer o upload do artigo.");
      setLoading(false);
      return;
    }

    if (!knowledgementTerm) {
      toast.error("É necessário fazer o upload do termo de ciência.");
      setLoading(false);
      return;
    }

    const payload = {
      tag: `${(form?.tag?.length
        ? [...(form?.tags || []), form?.tag]
        : [...(form?.tags || [])]
      ).join(",")}`,
      image: form?.image?.id ? form?.image?.id : null,
      user: user?.id,
      file: file?.id,
      knownledgementTerm: knowledgementTerm?.id,
      author: {
        name: form?.name,
        email: form?.email,
        orcid: form?.orcid,
        ppg: form?.ppg,
        credit: form?.credit?.id,
        sector: form?.area?.id,
        isAdvisor: false,
      },
      coauthors:
        coauthors?.map((m, k) => ({
          name: form?.[`co_name${k}`],
          email: form?.[`co_email${k}`],
          orcid: form?.[`co_orcid${k}`],
          ppg: "",
          credit: form?.[`co_credit${k}`]?.id,
          sector: form?.[`co_area${k}`]?.id,
          isAdvisor: form?.[`is_supervisor${k}`]?.id === 1,
        })) || [],
      font: form?.name,
      status: "in_screening",
      edict: edict_id,
      title: `${file?.name || ""}`.split(".")?.[0],
    };

    const result = id ? await Update(payload, id) : await Create(payload);
    if (result && !exposeStrapiError(result)) {
      await sleep(1000);
      await ReadFile({ url: parseStrapiImage(file?.url), id: result?.id });
      toast.success("Salvo!");
      history.goBack();
    }
    setLoading(false);
  };

  const sleep = (ts) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ts);
    });

  const addCoAuthor = () => {
    setCoauthors([...coauthors, { id: new Date().getTime() }]);
  };

  const removeCoAuthor = (caid) => {
    setCoauthors([...coauthors.filter((ff) => ff.id !== caid)]);
  };

  useEffect(() => {
    if (!!id) {
      init();
    }
  }, [id]);
  useEffect(() => {
    initData();
  }, []);

  return {
    loading,
    register,
    formValue,
    changeForm,
    form,
    setForm,
    save,

    sectors,
    credtis,
    coauthors,

    addCoAuthor,
    removeCoAuthor,

    file,
    setFile,
    knowledgementTerm,
    setKnowledgementTerm,
    model,
  };
}
