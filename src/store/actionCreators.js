import * as constants from './constants';

export const searchFocus = () =>({
    type:constants.SEARCH_FOCUS
});

export const searchBlur = () =>({
    type:constants.SEARCH_BLUR
});

export const changeList = (data) =>({
    type:constants.CHANGE_LIST,
    data
});

export const getList = (data) =>({
    type:constants.GET_LIST,
    data
})
   
    // return (dispatch) => {
    //    axios.get('/api/headerList.json').then((res)=>{
    //        const data = res.data;
    //        dispatch(changeList(data.data));
    //    }).catch(()=>{
    //        console.log('error');
    //    })
    // }
