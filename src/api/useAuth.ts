import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { UserLoginRequest, UserLoginResponse } from "./types"
import { BaseResponse } from "../types"
import { notifyError, notifySuccess } from "../components/custom/Notification"
import { login } from "../store/slice/userActions"
import { fetcher, HttpMethod } from "../config/api"
import { baseUrl } from "../config/constants"

const url = {

    // loginAdmin: "/login",

    loginProvider: `${baseUrl}/auth/login`,
    registerProvider: `${baseUrl}/auth/register`,
}

export const useLoginProvider = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: (body: UserLoginRequest): Promise<BaseResponse<UserLoginResponse>> => {
            return fetcher<BaseResponse<UserLoginResponse>>(
                {
                    method: HttpMethod.POST,
                    url: url.loginProvider,
                    data: body
                },
            );
        },
        onSuccess: (res) => {
            console.log(res)
            notifySuccess("Login Success")
            login(res.data)
            navigate("/")
        },

        onError: (error) => {
            console.log(error)
            notifyError("Login Failed")
        }
    })
}
