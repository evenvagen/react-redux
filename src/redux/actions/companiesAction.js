export const add = (company) => {
    return {
        type: 'ADD_COMPANY',
        payload: company,
    };
}