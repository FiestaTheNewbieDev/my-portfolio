import IOsSettings from '@/interfaces/IOsSettings';
import ITheme from '@/interfaces/ITheme';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IOsSettings = {
	theme: {
		primary: '#303030',
		secondary: '#ffffff',
	},
};

export const osSettingsSlice = createSlice({
	name: 'osSettings',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<ITheme>) => {
			state.theme = action.payload;
		},
	},
});

export const { setTheme } = osSettingsSlice.actions;
export default osSettingsSlice.reducer;
