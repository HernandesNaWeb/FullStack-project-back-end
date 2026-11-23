import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
    const user = req.body;
    
    try { 
        const userBK = await User.create(user);
        res.json({ sucess: true, data: userBK });
    } catch (error) {
        res.json({ success: false, data: { message: error.message } })
    }
}

const getAll = async (req, res) => {
    console.log(res.locals);

    try {
        const allUsers = await User.findAll();
        res.json({ success: true, data: allUsers });
    } catch (error) {
        res.json({ success: false, data: { message: error.message } })
    }
}
const getOne = async (req, res) => {
    const { id } = req.params;
    console.log("ID recebido:", id); // Ajuda a verificar se chegou undefined ou texto
    try {
        const userBK = await User.findByPk(id);
        if (!userBK) {
            return res.status(404).json({ 
                success: false, 
                message: "Usuário não encontrado" 
            });
        }
        return res.json({ success: true, data: userBK });
    } catch (error) {
        return res.status(500).json({ 
            success: false, 
            data: { message: error.message } 
        });
    }
};


const getByName = async (req, res) => {
    const { name } = req.params;

    try {
        const userBK = await User.findOne({ where: { name } });
        res.json({ success: true, data: userBK })
    } catch (error) {
        res.json({ success: false, data: { message: error.message } })
    }
}

const alterUsers = async (req, res) => {
    const { id } = req.params
    const newData = req.body

    try {
        const userBK = await User.update(newData, { where: { id } });
        res.json({ success: true, data: userBK })
    } catch (error) {
        res.json({ success: false, data: { message: error.message } })
    }
}
const deleteUsers = async (req, res) => {
    const { id } = req.params

    try {
        const userBK = await User.destroy({ where: { id } });
        res.json({ success: true, data: userBK })
    } catch (error) {
        res.json({ success: false, data: { message: error.message } })
    }
}

const login = async (req, res) => {
    const { name, email, password } = req.body;

    try { 
        const user = await User.findOne({ where: { name } });

        if (!user) return res.json({ success: false, message: "Usuario não esta cadastrado" });

        const userEntry = await entry.findOne({ where: { email } });
       if (!userEntry) return res.json({ success: false, message: "Email não esta cadastrado" });

        const logado = await bcrypt.compare(password, password);
        if (!logado) return res.json({ success: false, message: "senha informada está incorreta" });

        const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            path: '/',
        }).json({ success: true, message:"cookie setado" });
        
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export {
    createUser,
    getAll,
    getOne,
    getByName,
    alterUsers,
    deleteUsers,
    login
}