import path from "path";
import HotelModel from "../models/HotelModel.js";

export const getAllHotel = async (req, res) => {
  try {
    const hotels = await HotelModel.findAll();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getHotel = async (req, res) => {
  try {
    const hotels = await HotelModel.findAll({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const createHotel = async (req, res) => {
  const { nama, lokasi, rating, fasilitas, kota } = req.body;

  const file1 = req.files.file1;
  const file2 = req.files.file2;
  const file3 = req.files.file3;

  const ext1 = Math.random() + path.extname(file1.name);
  const ext2 = Math.random() + path.extname(file1.name);
  const ext3 = Math.random() + path.extname(file1.name);

  const fileName1 = ext1;
  const fileName2 = ext2;
  const fileName3 = ext3;

  const url1 = `${req.protocol}://${req.get("host")}/foto_hotel/${fileName1}`;
  const url2 = `${req.protocol}://${req.get("host")}/foto_hotel/${fileName2}`;
  const url3 = `${req.protocol}://${req.get("host")}/foto_hotel/${fileName3}`;

  file1.mv(`./public/foto_hotel/${fileName1}`);
  file2.mv(`./public/foto_hotel/${fileName2}`);
  file3.mv(`./public/foto_hotel/${fileName3}`);

  try {
    await HotelModel.create({
      nama: nama,
      lokasi: lokasi,
      rating: rating,
      fasilitas: fasilitas,
      kota: kota,
      image1: fileName1,
      url1: url1,
      image2: fileName2,
      url2: url2,
      image3: fileName3,
      url3: url3
    });
    res.status(201).json({ msg: "hotal berhasil ditambah" });
  } catch (error) {
    console.log(error.message);
  }
};
