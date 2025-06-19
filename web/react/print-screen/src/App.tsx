import { useRef, useState } from 'react'
import domToImage from "dom-to-image-more";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  const handleCapture = async () => {
    if (!ref.current) return;

    try {
        const blob = await domToImage.toBlob(ref.current);
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "captura.png";
        a.click();

        URL.revokeObjectURL(url); // limpa depois
    } catch (err) {
        console.error("Erro ao gerar imagem:", err);
    }
  };

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={handleCapture} style={{ marginLeft: "20px" }}>
          Print screen
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
