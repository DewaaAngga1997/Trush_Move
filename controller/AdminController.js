import Admin from "../models/AdminModel.js";

//GET ALL ADMIN
export const getAdmin = async (req, res) => {
  try {
    const response = await Admin.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

//GET ADMIN BY ID
export const getAdminbyId = async (req, res) => {
  try {
    const response = await Admin.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

//CREATE ADMIN
export const createAdmin = async (req, res) => {
  try {
    await Admin.create(req.body);
    res.status(201).json({ msg: "Data Admin Berhasil Ditambah" });
  } catch (error) {
    console.log(error.message);
  }
};

//UPDATE ADMIN
export const updateAdmin = async (req, res) => {
  try {
    await Admin.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Data Admin Berhasil Diubah" });
  } catch (error) {
    console.log(error.message);
  }
};

//DELETE ADMIN
export const deleteAdmin = async (req, res) => {
  try {
    await Admin.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Data Admin Berhasil Dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
