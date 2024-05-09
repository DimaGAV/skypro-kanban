const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck"


export async function getCadrs () {
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

export async function postLogin ( {login, password} ) {
    try {
        const response = await fetch ("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    headers: {
        Authorization: `Bearer ${token}`,
        },
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
    // .then((user) => {
        // setUser(user.user);
    //   })
    }
    catch (error) {
    throw new Error("Ошибка при входе")
    }
    
}