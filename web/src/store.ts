import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from "@/modules/auth/features"

// TODO: Use constants

const authPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const authPersistantReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
    reducer: {
        auth: authPersistantReducer
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch