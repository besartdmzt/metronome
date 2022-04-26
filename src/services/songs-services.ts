import axios from "src/services/axios";

export const getSongsService = async (bpm: number) => {
  return await axios.get(`tempo?bpm=${bpm}&limit=5`);
};
