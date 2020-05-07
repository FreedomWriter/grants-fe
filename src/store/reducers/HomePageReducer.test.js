  
import reducer from "../reducers/HomePageReducer.js";
import * as types from "../actions/HomepageActions.js";
import { ExpansionPanelActions, BottomNavigationAction } from "@material-ui/core";

const testAction = {
    payload: {

    }
}

describe('HomePageReducer', () =>{
    test('should return HomePage initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            error: "",
            userInfo: {},
            grantsInfo: {},
            isLoadingUser: true,
            isLoadingGrants: false,
            reFetch: false,
        });
    });
    test('should handle GET_USER_INFO_START', ()=>{
        expect(reducer(undefined,{
            type: types.GET_USER_INFO_START
        })
        ).toEqual({
            error: "",
            userInfo: {},
            grantsInfo: {},
            isLoadingUser: false,
            isLoadingGrants: false,
            reFetch: false,
        });
    });
    test('should handle GET_USER_INFO_SUCCESSS', ()=>{
        expect(reducer(
            {},
            {
            type: types.GET_USER_INFO_SUCCESSS,
            payload: action.payload,
            }
        ).toEqual({
            error: "",
            userInfo: {},
            grantsInfo: {},
            isLoadingUser: false,
            isLoadingGrants: false,
            reFetch: false,
        });
    });
    

})