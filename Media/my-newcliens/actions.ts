import { Dispatch } from 'redux';
import { MY_NEWCLIENS_ACTIONS } from './action-types';
import { FetchDataAction } from './types';

export const fetchData = (data: any) => (dispatch: Dispatch<FetchDataAction>) => {
    dispatch({ type: MY_NEWCLIENS_ACTIONS.SET_DATA, data });
};
