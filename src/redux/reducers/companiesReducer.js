const initialState = {
    companies: ['Company 1', 'Company 2', 'Company 3'],
}

export default function companiesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COMPANY':
            return {
                ...state,
                companies: [...state.companies, action.payload]
            }
        default:
            return state;
    }
}