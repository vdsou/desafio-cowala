import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import "./styles.css";

interface IData {
  name: string;
  profession: string;
  fone: string;
  ip: string;
}
function Infos() {
  const initialData = {
    name: String(""),
    profession: String(""),
    fone: String(""),
    ip: String(""),
  };
  const [data, setData] = useState<Partial<IData>>();
  useEffect(() => {
    const info = localStorage.getItem("info");
    if (info) setData(JSON.parse(info));
  }, []);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name: inputName, value } = event.target as typeof event.target & {
      name: { value: string };
      value: { value: string };
    };

    setData({
      ...data,
      [inputName]:
        inputName === 'fone'
          ? value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3")
          : value,
    });
  };
  const save = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("info", JSON.stringify(data));
  };
  const clear = () => {
    localStorage.removeItem("info");
    setData(initialData);
  };
  const handleFetch = async () => {
    axios
      .get("https://ip-fast.com/api/ip/")
      .then((res) => setData({ ...data, ip: res.data }))
      .catch((error) => console.log(error));
  };
  return (
    <main>
      <form onSubmit={save}>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            name="name"
            value={data?.name || ""}
            onChange={handleChange}
          />
        </label>

        <div className="tel-prof">
          <label htmlFor="profession">
            Profissão
            <input
              type="text"
              id="profession"
              name="profession"
              value={data?.profession || ""}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="fone">
            Celular
            <input
              type="tel"
              id="fone"
              name="fone"
              value={data?.fone || ""}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="ip">
          <label htmlFor="ip-address">
            Meu IP
            <input
              type="text"
              id="ip-address"
              name="ip"
              value={data?.ip || ""}
              onChange={handleChange}
              disabled
            />
          </label>
          <button type="button" onClick={() => handleFetch()}>
            ENCONTRAR IP
          </button>
        </div>

        <div className="buttons">
          <button type="submit">SALVAR</button>
          <button type="button" onClick={clear}>
            LIMPAR
          </button>
        </div>
      </form>
    </main>
  );
}

export default Infos;
