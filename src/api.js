export async function getCadrs ({token}) {
    const response = await fetch ("https://wedev-api.sky.pro/api/kanban",
    {headers: {
    Authorization: `Bearer ${token}`,
    }
    })

    if (!response.ok) {
        throw new Error("Ошибка сервера")
    }

    const data = await response.json()
    return data
}

export async function loginUser ( {login, password} ) {
    try {
        const response = await fetch ("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify ({
        login,
        password,
    }),
    })
    
if (!response.ok) {
    throw new Error("Ошибка при входе")
}

    const data = await response.json()
    
    return data
   
    }
    catch (error) {
    throw new Error("Ошибка при входе")
    }
    
}

export async function registerUser ( {name, login, password} ) {
    try {
        const response = await fetch ("https://wedev-api.sky.pro/api/user",   {
    method: "POST",
    body: JSON.stringify ({
        name,
        login,
        password,
    }),
    })
    
if (!response.ok) {
    throw new Error("Такой пользователь уже существует")
}

    const data = await response.json()
    
    return data
    
    }
    catch (error) {
    throw new Error("Ошибка при регистрации")
    }
    
}