import { CoreContext } from "context/CoreContext";
import React, { useContext, useEffect, useState } from "react";
import { Read, ReadById } from "services/articles";
import { exposeStrapiError } from "utils";
import { parseEdict } from "utils/parsers";

export default function useController(edictId) {
  const [loading, setLoading] = useState(false);
  const [registers, setRegisters] = useState([]);
  const { user } = useContext(CoreContext);

  const init = async () => {
    setLoading(true);
    if (edictId) {
      const result = await Read();
      if (result && !exposeStrapiError(result)) {
        const parsedRegisters = result.map(parseEdict);
        const filteredRegisters = parsedRegisters.filter(
          (register) => register.edict_id === parseInt(edictId, 10)
        );

        setRegisters(filteredRegisters);
      }
    } else if (user.isAdmin) {
      const result = await Read();
      if (result && !exposeStrapiError(result)) {
        setRegisters(result.map(parseEdict));
      }
    } else {
      const result = await ReadById(user?.id);
      if (result && !exposeStrapiError(result)) {
        setRegisters(result.map(parseEdict));
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return {
    loading,
    registers,
  };
}
