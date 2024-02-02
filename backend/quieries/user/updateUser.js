import fs from "fs";
const userDb = "/Users/23LP5619/Desktop/backend/model/users.json";

export const updateUser = async (req, res) => {
  const {
    email: upEmail,
    username,
    password,
    followers,
    following,
    profile_pic,
  } = req.body;

  try {
    const newUserFile = await fs.readFileSync(userDb, "utf-8");
    const data = JSON.parse(newUserFile);

    const correctUserIndex = data.data.findIndex(
      ({ email }) => email === upEmail
    );

    if (correctUserIndex !== -1) {
      const correctUser = data.data[correctUserIndex];

      correctUser.username = username;
      correctUser.followers = followers;
      correctUser.following = following;
      correctUser.hashPass = password;
      correctUser.profile_pic = profile_pic;

      fs.writeFileSync(userDb, JSON.stringify(data));

      return "Successfully updated";
    } else {
      return "User not found";
    }
  } catch (error) {
    console.error(error.message);
    return "Error updating user";
  }
};
