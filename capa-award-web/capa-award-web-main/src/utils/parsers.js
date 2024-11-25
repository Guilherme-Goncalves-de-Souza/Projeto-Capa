export const STATUS_ARTICLES = {
  not_contemplated: "Não contemplado",
  accepted: "Aceito",
  in_screening: "Em triagem",
  customer: "Aguardando",
  absent: "Ausente",
  cancelled: "Cancelado",
  performed: "Realizada",
  scheduled: "Agendado",
};

export const parseBoolean = (value) => {
  return value ? "Sim" : "Não";
};

export const parseEdict = (item) => {
  return {
    ...item,
    edict: item?.edict?.title,
    edict_id: item?.edict?.id,
    article: item?.title,
    author: item?.font,
    responsible: item?.users?.map((mm) => mm?.name)?.join(", "),
    status: STATUS_ARTICLES[item?.status],
    published: parseBoolean(item?.isCertified),
  };
};
