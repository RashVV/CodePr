import { Action } from 'redux';
import { MY_NEWCLIENS_ACTIONS } from './action-types';

export interface MyNewcliensState {
    data: any;
}

export type FetchDataAction = Action< MY_NEWCLIENS_ACTIONS.SET_DATA> & {
}

export type MyNewcliensActions = FetchDataAction;
