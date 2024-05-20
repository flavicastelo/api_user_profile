import Crypto from "../utils/crypto.js"
import User from '../models/userModel.js';

export const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const crypto = new Crypto();

  try {
    if (!email || !password) {
      return res.status(400).json({ mensagem: 'Email e senha obrigatórios' });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    const comparePass = await crypto.checkPassWord(password, user.password);
    if (!comparePass) {
      return res.status(401).json({ mensagem: 'Usuário ou Senha incorreta' });
    }
    const token = crypto.createToken(user, 1800);
    res.status(200).json({ user, message: "Login feito com sucesso!", token });
  } catch (error) {
    console.error("Erro ao logar: ", error);
    return res.status(500).json({ error: error.message });
  }

}
