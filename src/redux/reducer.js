export const initialState = {
  props: "yeah, we got em"
}

// We use this string to match the action object with the case we want to run.
const CHANGE_PROPS = "CHANGE_PROPS"

// This is the reducer. Whatever object it returns will become our new Redux state. It takes in two arguments:
  // First, it takes in an object. If no object is passed in, it uses the initialState object, above.
  // Second, it takes in another object. Usually, this action has a "type" property and a "payload" property. 
export default function reducer(state=initialState, action)
{
  console.log("Reducer Invoked:" , action)
  switch (action.type){
    case CHANGE_PROPS:
      return {...state, ...action.payload}
    default:
      return state
  }
}

// This is an action creator. It returns an object. We use this to change the properties of the object that our reducer function returns. The object is called an "action", and you can see how we use it in the reducer function above.
export function changeProps(){
  return {
    type: CHANGE_PROPS,
    payload: {
      props: "Hey, I changed!"
    }
  }
}