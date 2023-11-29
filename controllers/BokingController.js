import HotelModel from "../models/HotelModel.js";
import BokingModel from "../models/BokingModel.js";

export const createBoking = async (req, res) => {
  try {
    const {
      checkin,
      checkout,
      total_ruangan,
      nama_pemesan,
      email_pemesan,
      total_pembayaran
    } = req.body;
    const hotel = await HotelModel.findOne({
      where: {
        id: req.params.id
      }
    });
    await BokingModel.create({
      checkin: checkin,
      checkout: checkout,
      total_ruangan: total_ruangan,
      nama_pemesan: nama_pemesan,
      email_pemesan: email_pemesan,
      total_pembayaran: total_pembayaran,
      hotelId: hotel.id
    });
    res.status(201).json({ msg: "Anda berhasil booking!" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getBoking = async (req, res) => {
  try {
    const response = await BokingModel.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
