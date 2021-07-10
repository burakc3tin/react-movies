import * as actionTypes from '../actions/actionTypes'


const searchReducer = (state = "", action) => {

    let  newState;

    switch (action.type) {
      
        case actionTypes.SEARCH_WORDS:
            return (newState = action.payload);


        default:
            return state;
    }


};

export default searchReducer;