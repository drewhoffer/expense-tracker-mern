//Reduce does :
//      How we specify the application state changes in response to certain actions to our context

//Going to handle things like add, delete etc
export default(state, action) => {
    switch(action.type){
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !==
                     action.payload)
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}