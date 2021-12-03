const users = []

const User = (state = users, action) => {
    switch (action.type) {
        case "Fetch":
            const curArray = action.payload
            state = curArray.map(value => {
                return value
            })
            return state
        default:
            return state
    }
}

export default User