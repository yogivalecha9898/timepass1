const getUsers = array => {
    return {
        type: "Fetch",
        payload: array
    }
}

export { getUsers }