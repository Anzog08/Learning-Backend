import fs from "fs";
import { compareHash } from "../utils/password-hash.js";
const userDB =
  "/Users/23LP5619/Desktop/learning-backend/backend/model/users.json";

export const authMiddleware = async (req, res, next) => {
  try {
    const { email: userMail, password } = req.body;

    const userJson = JSON.parse(fs.readFileSync(userDB, "utf8"));

    const userChecked = userJson.find(({ email }) => email === userMail);
    console.log(userChecked);
    if (!userChecked) {
      res.status(400).send("email or password is wrong");
    }

    const isItTrue = compareHash(password, userChecked.hashPass);

    if (isItTrue !== true) {
      res.status(400).send("email or password is wrong");
    } else {
      next();
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
