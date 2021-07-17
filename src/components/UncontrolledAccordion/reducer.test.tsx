import {reducer, StateType} from "./reducer";

test("collapsed should be true", () =>{
    //data
const state: StateType ={
    collapsed: false
}
    //action
const newState=reducer(state, {type: "TOGGLE-COLLAPSED"})
    //expection
    expect(newState.collapsed).toBe(true);
})

test("collapsed should be false", () =>{

    const state: StateType ={
        collapsed: true
    }

    const newState=reducer(state, {type: "TOGGLE-COLLAPSED"})

    expect(newState.collapsed).toBe(false);
})

/*
test("collapsed should be error", () =>{
    //data
    const state: StateType ={
        collapsed: true
    }

  expect(() => {reducer(state, {type: "FAKE-TYPE"})
}).toThrowError();
    //action
})
*/

