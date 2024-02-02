import fs from "fs";
const userDb = "/Users/23LP5619/Desktop/backend/model/users.json";

export const deleteUser = async (req, res) => {
  const { email: upEmail } = req.params;
  try {
    const newUserFile = await fs.readFileSync(userDb, "utf-8");
    const data = JSON.parse(newUserFile);

    const deletedUser = data.filter(({ email }) => email !== upEmail);
    fs.writeFileSync(userDb, JSON.stringify(deletedUser));

    return `Deleted ${upEmail} user `;
  } catch (error) {
    console.error(error.message);
  }
};
