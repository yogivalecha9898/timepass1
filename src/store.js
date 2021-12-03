import { createStore } from "redux"
import rootReducer from "./reducers/combined"

const store = createStore(rootReducer)

export default store