import axios from "axios";
export const getBoxes = async () => {
  try {
    const res = await axios.get("/api/box");
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const votingUpdate = async (box) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put("/api/box", box, config);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
