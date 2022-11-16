import { useState } from "react";
import "./style.css";
import { FcGlobe } from "react-icons/fc";


import api from "../../services/api";

export function Home() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum cep");
      setCep("");
      return;
    }
    try {
      const response = await api.get(input + "/json");
      console.log(response.data);
      setCep(response.data);
      setInput("");
    } catch {   
      alert('Ops cep não encontrado');
       setInput("");
      setCep("")
    }
  }

  return (
    <div className="Container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite o seu cep ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='"buttonSearch' onClick={handleSearch}>
          <FcGlobe size={25} />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2> CEP: {cep.cep}</h2>
          <span>Rua: {cep.logradouro} </span>
          <span>Bairro: {cep.bairro} </span>
          <span>
            {cep.localidade} - {cep.uf}{" "}
          </span>
        </main>
      )}
      
    </div>
  );
}
