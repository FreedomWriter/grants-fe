import reducer from "../../../store/reducers/profileReducer.js";
import * as types from "../../../store/actions/profileActions.js";


const action = {
    payload: {},
};


test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
        grants: [],
        profileDetails: {},
        isLoading: false,
    });
});

test("should handle GET_PROFILE_START", () => {
    expect(
        reducer(undefined, {
            type: types.GET_PROFILE_START,
        })
    ).toEqual({
        grants: [],
        profileDetails: {},
        isLoading: true,
    });
});

test("should handle GET_PROFILE_SUCCESS", () => {
    expect(
        reducer({}, {
            type: types.GET_PROFILE_SUCCESS,
            payload: action.payload,
        })
    ).toEqual({
        profileDetails: {},
        isLoading: false,
    });
});


test("should handle GET_PROFILE_FAILURE", () => {
    expect(
        reducer(undefined, {
            type: types.GET_PROFILE_FAILURE,
            payload: action.payload.error,
        })
    ).toEqual({
        grants: [],
        profileDetails: {},
        isLoading: false,
        error: undefined,
    });
});