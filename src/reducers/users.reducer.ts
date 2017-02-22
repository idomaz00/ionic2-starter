import * as usersActions from '../actions/users.actions';

export const usersReducer = (state: any = [], {type, payload}) => {
    switch(type) {
        case usersActions.ActionTypes.FETCH: {
            return payload;
        }

        default: {
            return state;
        }
    }
}