const initialState = {
    companies: [{id: 1, name: 'Company 1'}, {id: 2, name: 'Company 2'}, {id: 3, name: 'Company 3'}],
}

export default function companiesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COMPANY':
            return {
                ...state,
                companies: [...state.companies, action.payload]
            }
        case 'REMOVE_COMPANY':
            return {
                ...state,
                companies: state.filter(({id}) => id !== action.id)
            }
        default:
            return state;
    }
}