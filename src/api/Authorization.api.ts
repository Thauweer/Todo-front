
export interface response {
    token: string,
    username: string
}

const authorizationFabric = (url: string) => fetch(url, { method: 'POST' }).then(req => req.json()).then((data: any) => data as response)

const login = (login: string, password: string) => {
    return authorizationFabric('/api/auth/token?login=' + login + '&password=' + password)
}

const registration = (login: string, password: string) => {
    return authorizationFabric('/api/auth/registration?login=' + login + '&password=' + password)
}

export { login, registration }

