import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    focused:true,
    list:[]
});

export default (state = defaultState,action)=>{
    if(action.type === constants.SEARCH_FOCUS){
        return state.set('focused',true);
    }
    if(action.type === constants.SEARCH_BLUR){
        return state.set('focused',false);
    }
    if(action.type === constants.CHANGE_LIST){
        // console.log("action"+JSON.stringify(action));
        // console.log("cccaa"+JSON.stringify(defaultState.list));
        defaultState.list=action
        // console.log("fuzihou"+JSON.stringify(defaultState.list.data))
        return defaultState.list;
    }
    if(action.type === constants.GET_LIST){
        defaultState.list = action
        return defaultState.list
    }
}