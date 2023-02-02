export const add = (company) => {
    return {
        type: 'ADD_COMPANY',
        payload: company,
    };
}

export const remove = (id) => {
    return {
        type: 'REMOVE_COMPANY',
        id: id
    }
}