const initialState = {
  password: '',
  email: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_EMAIL':
      const normalizeEmail = action.email.toLowerCase();
      return { ...state, email: normalizeEmail };
    case 'SAVE_PASSWORD':
      const normalizePassword = action.password.toLowerCase();
      return { ...state, password: normalizePassword };
    default:
      return state;
  }
};

export const loginSelectors = {
  getPassword: (state = initialState) => state.password,
  getEmail: (state = initialState) => state.email,
};
