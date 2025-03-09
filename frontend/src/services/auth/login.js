import { AppParse } from "../b4a";

export const login = async (username, password) => {
    const user = await AppParse.User.logIN(username, password);

    console.log(user);

    return {
        ...user
    }
}