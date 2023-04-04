import { configureStore } from "@reduxjs/toolkit"
import getId from './faworitesRedux'

export const store = configureStore({
    reducer: {
        todos: getId
    }
})