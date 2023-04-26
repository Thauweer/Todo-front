
export interface response {
    access_token: string,
    username: string
}

const authentificationFabric = (url: string) => fetch(url, { method: 'POST' }).then(req => req.json()).then((data: any) => data as response)

const login = (login: string, password: string) => {
    return authentificationFabric('/api/auth/token?login=' + login + '&password=' + password)
}

const registrate = (login: string, password: string) => {
    return authentificationFabric('/api/auth/registration?login=' + login + '&password=' + password)
}

export { login, registrate }

