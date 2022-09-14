import { MyNewcliensActions, MyNewcliensState } from './types';
import { MY_NEWCLIENS_ACTIONS } from './action-types';

export const initialState: MyNewcliensState = {
    data: null,
};

export default function MyNewcliensReducer(state = initialState, action: MyNewcliensActions): MyNewcliensState {
    switch (action.type) {
        case MY_NEWCLIENS_ACTIONS.SET_DATA:
            return {
                ...state,
            };
        default:
            return state;
    }
}
