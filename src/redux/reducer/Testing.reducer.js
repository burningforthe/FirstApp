const initState = {
    temple_data: []
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case "TEMPLES_FETCHED":
            return {
                ...state,
                temple_data: action.payload
            };
        default:
            return state
    }
}