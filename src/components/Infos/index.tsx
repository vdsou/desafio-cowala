import React from "react";
import "./styles.css";

function Infos() {
  return (
    <main>
      <form>
        <label htmlFor="name">
          Nome
          <input type="text" id="name" />
        </label>

        <div className="tel-prof">
          <label htmlFor="profession">
            Profissão
            <input type="text" id="profession" />
          </label>

          <label htmlFor="fone">
            Celular
            <input type="text" id="fone" />
          </label>
        </div>

        <div className="ip">
          <label htmlFor="ip-address">
            Meu IP
            <input type="text" id="ip-address" />
          </label>
          <button type="button">ENCONTRAR IP</button>
        </div>

        <div className="buttons">
          <button type="submit">SALVAR</button>
          <button type="button">LIMPAR</button>
        </div>
      </form>
    </main>
  );
}

export default Infos;
