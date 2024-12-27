import { UserLoginResponse } from "../../api/types";
import { store } from "../index";
import { loginUser, logoutUser } from "./userSlice";

export const login = (state: UserLoginResponse) => {
    store.dispatch(loginUser(state));
    if (state.token) {
        window.localStorage.setItem("accessToken", state.token);
    }
};

export const logout = () => {
    store.dispatch(logoutUser());
    window.localStorage.removeItem("accessToken");
};