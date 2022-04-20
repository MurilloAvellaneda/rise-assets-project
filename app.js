// Configurações
require("dotenv").config();
const connect = require("./configs/db.config");
connect();


// Pacotes
const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares gerais
app.use(express.json());
app.use(cors());

// Rotas públicas
app.use("/auth", require("./routes/auth.routes"));

// Middlewares de rotas
app.use(require("./middlewares/auth.middleware"));
app.use("/assets", require("./routes/asset.routes"));

app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT: ${process.env.PORT}`)
})