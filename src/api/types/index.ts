export type UserLoginRequest = {
    username: string
    password: string
}

export type UserLoginResponse = {
    id: string,
    fullName: string,
    phone: string,
    dateOfBirth: string,
    note: string,
    roleId: number,
    token: string | undefined
}