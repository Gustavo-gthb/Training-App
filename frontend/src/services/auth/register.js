import { AppParse } from "../b4a";

export const register = async (username, email, password) => {
  const createdUser = await AppParse.User.SignUp(username, email, passaword);

  console.log(createdUser);

  return {
    ...createdUser,
  };
};
