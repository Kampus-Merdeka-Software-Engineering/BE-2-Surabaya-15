import TestimoniModel from "../models/TestimoniModels.js";

export const getAllTestimoni = async (req, res) => {
  try {
    const response = await TestimoniModel.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const createTestimoni = async (req, res) => {
  const { nama, email, pesan } = req.body;
  try {
    await TestimoniModel.create({
      nama: nama,
      email: email,
      pesan: pesan
    });
    res.status(201).json({ msg: "Testimoni berhasil dibuat" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
