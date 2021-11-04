import { LOGIN } from "./types"
const initialState = {
    credential: {}
  }
  
  export default function userReducer(state = initialState, { type, payload }) {
    console.log(payload)
    switch (type) {
      case LOGIN: {
        return { ...state, credential: payload }
      }
  
      default:
        return state
    }
  }
  