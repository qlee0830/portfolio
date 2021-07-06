 const saveEmail = (email) => {
  return {
    type: 'SAVE_EMAIL',
    email,
  };
};

 const savePassword = (password) => {
  return {
    type: 'SAVE_PASSWORD',
    password,
  };
};
export const {
    saveEmail,savePassword
}