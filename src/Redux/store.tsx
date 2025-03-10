import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice para gerenciar o tema
const themeSlice = createSlice({
  name: "theme",
  initialState: { isDarkMode: false },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

// Exportar ações
export const { toggleTheme, setDarkMode } = themeSlice.actions;

// Configurar store
export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

// Exportar RootState e AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
