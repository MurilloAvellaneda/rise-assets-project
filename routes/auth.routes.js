// Pacotes
const { Router } = require("express");
const bcrypt = require("bcryptjs");


// Modelos
const User = require("../models/User.model");

// Executar router
const router = Router();

router.post("/signup", async(req, res) =>{
    // Informações que desejamos receber
    const { email, password } =  req.body;
    try {
        // Verificando se as informações estão presentes
        if(!email || !password){
            throw new Error("Missing email or password")
        }

        // Verificando se o email do usuário já existe no banco de dados
        const userFromDb = await User.findOne({email});
        if(userFromDb) {
            throw new Error("Email already exists")
        }

        // Caso o email esteja ausente no banco, seguimos com a sua criação
        // Criptografando a senha
        const salt = bcrypt.genSaltSync(12);
        const passwordHash = bcrypt.hashSync(password, salt);

        // Criando usuário no banco
        await User.create({
            email,
            passwordHash
        })

        // Se nenhum erro ocorreu até o momento, temos sucesso:
        res.status(201).json("User created!")

        // Se ocorreram erros
    } catch(error) {
        res.status(500).json({message: "Error creating user", error: error.message})
    }
})

module.exports = router;