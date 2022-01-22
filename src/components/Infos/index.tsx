import React, { useState, ChangeEvent } from "react";
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
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } =
      event.target as typeof event.target & {
        name: { value: string };
        value: { value: string };
      };
    setData({
      ...data,
      [inputName]: event.target.value,
    });
  };
  const clear = () => {
    setData(initialData);
  };
  return (
    <main>
      <form>
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
            />
          </label>
          <button type="button">ENCONTRAR IP</button>
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
