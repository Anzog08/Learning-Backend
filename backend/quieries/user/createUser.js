import fs from "fs";
const userDb = "/Users/23LP5619/Desktop/backend/model/users.json";
import { makeHash } from "../../utils/password-hash.js";

export const createUser = async (req, res) => {
  const { username, email, password, followers, following, profile_pic } =
    req.body;
  try {
    if (
      !username ||
      !email ||
      !password ||
      !followers ||
      !following ||
      !profile_pic
    ) {
      throw new Error("Please fill all the fields");
    }
    const newUserFile = await fs.readFileSync(userDb, "utf-8");

    const data = JSON.parse(newUserFile);
    if (data.find((user) => user.email === email)) {
      throw new Error("User already exists");
    }
    const hashPass = makeHash(password);
    console.log(hashPass);
    data.push({
      username,
      email,
      hashPass,
      followers,
      following,
      profile_pic,
    });
    await fs.writeFileSync(userDb, JSON.stringify(data));
    return "success";
  } catch (error) {
    throw new Error(error.message);
  }
};
