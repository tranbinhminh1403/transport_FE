import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLoginResponse } from "../../api/types";
import { APP } from "../../config/constants";
import { app } from "../../routes";

type UserState = {
    [APP.ADMIN]: UserLoginResponse
    [APP.COMPANY]: UserLoginResponse
}

const token = localStorage.getItem("accessToken") ?? undefined;

const initialState: UserState = {
    [APP.ADMIN]: {
        token: undefined
    },
    [APP.COMPANY]: {
        token: token 
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<UserLoginResponse | undefined>) => {
            return {
                ...state,
                [app]: action.payload
            }
        },

        logoutUser: (state) => {
            return {
                ...state,
                [app]: undefined
            }
        },

        setUser: (state, action) => {
            state[app] = {
                ...action.payload,
                token: state[app]?.token
            }
        }
    },
});

export const { loginUser, logoutUser, setUser } = userSlice.actions;

export default userSlice.reducer;
