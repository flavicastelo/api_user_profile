import User from '../models/userModel.js';

const createUser = async (req, res) => {
  const data = {
    name: req.body.name,
    age: req.body.age,
    street: req.body.street,
    neighborhood: req.body.neighborhood,
    state: req.body.state,
    bio: req.body.bio,
  }
  try {
    const newUser = await User.create(data);
    return res.status(201).json({ message: "Usuário criado com sucesso!", newUser });

  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return res.status(500).json({ error: error.message });
  }
}

const getUserById = async (req, res) => {
  const idUser = req.params.iduser;

  try {
    const user = await User.findOne({ where: { id: idUser } });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }
    return res.status(200).json({ message: "Usuário listado com sucesso!", user });
  } catch (error) {
    console.error("Erro ao listar usuário:", error);
    return res.status(500).json({ error: error.message });
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json({ message: "Usuários listados com sucesso!", users });
  } catch (error) {
    console.error("Erro ao listar usuário:", error);
    return res.status(500).json({ error: error.message });
  }
}

const deleteUserById = async (req, res) => {
  const idUser = req.params.iduser;

  try {
    const deleteUser = await User.destroy({ where: { id: idUser } });
    if (!deleteUser) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }
    return res.status(200).json({ message: "Usuário excluído com sucesso!" });
  } catch (error) {
    console.error("Erro ao listar usuário:", error);
    return res.status(500).json({ error: error.message });
  }
}
const editUser = async (req, res) => {
  const idUser = req.params.iduser;
  const user = await User.findOne({ where: { id: idUser } });
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado." });
  }
  const data = {
    name: req.body.name || user.name,
    age: req.body.age || user.age,
    street: req.body.street || user.street,
    neighborhood: req.body.neighborhood || user.neighborhood,
    state: req.body.state || user.state,
    bio: req.body.bio || user.bio,
  }
  try {
    const updateUser = await User.update(data, { where: { id: idUser } });
    const newData = await User.findOne({ where: { id: idUser } });
    return res.status(200).json({ message: "Usuário editado com sucesso!", newData });

  } catch (error) {
    console.error("Erro ao editar usuário:", error);
    return res.status(500).json({ error: error.message });
  }
}

export { createUser, getUserById, getUsers, deleteUserById, editUser };