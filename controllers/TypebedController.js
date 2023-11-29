import HotelModel from "../models/HotelModel.js";
import TypebedModel from "../models/TypebedModel.js";

export const createTypeBed = async (req, res) => {
  try {
    const { name, harga } = req.body;
    const hotel = await HotelModel.findOne({
      where: {
        id: req.params.id
      }
    });
    await TypebedModel.create({
      name: name,
      harga: harga,
      hotelId: hotel.id
    });
    res.status(201).json({ msg: "Anda berhasil menambah type bed!" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getTypeBedByHotelId = async (req, res) => {
  try {
    const response = await TypebedModel.findAll(
      {
        where: {
          hotelId: req.params.id
        }
      },
      {
        include: [
          {
            model: HotelModel
          }
        ]
      }
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getAllType = async (req, res) => {
  try {
    const response = await TypebedModel.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
