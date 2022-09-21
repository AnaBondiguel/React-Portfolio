export default function reducer(state, action){
    switch(action.type) {
        case 'setFormData': {
            return {
                ...state, // destructuring to get form data
                // square brackets means that it's a key we're setting state with
                [action.data.name]: action.data.value
            }
        }
        case 'setUserMessage': {
            return {
                ...state,
                userMessage: action.data
            }
        }
        case 'setTextColour': {
            return {
                ...state,
                textColour: action.data
            }
        }
        case 'setCardColour': {
            return {
                ...state,
                cardColour: action.data
            }
        }
        default: return state
    }
}