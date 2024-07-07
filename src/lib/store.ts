import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import osSettingsReducer from '@/lib/features/osSettingsSlice';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedOsSettingsReducer = persistReducer(persistConfig, osSettingsReducer);

export const store = configureStore({
	reducer: {
        osSettings: persistedOsSettingsReducer,
    },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
