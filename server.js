// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve os arquivos estáticos da pasta /public
app.use(express.static(path.join(__dirname, "public"), {
  setHeaders(res) {
    // cache leve para assets, sem atrapalhar o HTML
    res.setHeader("Cache-Control", "public, max-age=300");
  }
}));

// Rota padrão → index.html
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Planify rodando em http://0.0.0.0:${PORT}`);
});
