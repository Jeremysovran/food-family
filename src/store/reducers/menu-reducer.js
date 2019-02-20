import isEmpty from 'lodash/isEmpty';
/**
 * Initial State
 */
const initialState = {
  username: '',
  password: '',
  firstname: '',
  lastname: '',
  month: '',
  email: '',
  day: '',
  year: '',
  adress: '',
  city: '',
  postalCode: '',
  birthdate: '',
  confirmPassword: '',
  picture: '',
  modalOpened: false,
  activeComponent: '',
  isAuthenticated: false,
  user: {},
  inputfirstname: '',

};

/**
 * Types
 */

const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const LOGIN_FORM_SUBMIT = 'LOGIN_FORM_SUBMIT';
const REGISTER_INPUT_CHANGE = 'REGISTER_INPUT_CHANGE';
export const REGISTER_FORM_SUBMIT = 'REGISTER_FORM_SUBMIT';
const REGISTER_MODAL_OPEN = 'REGISTER_MODAL_OPEN';
const LOGIN_MODAL_OPEN = 'LOGIN_MODAL_OPEN';
const CONFIRMATION_MODAL_OPEN = 'CONFIRMATION_MODAL_OPEN';
export const CONFIRMATION_FORM_SUBMIT = 'CONFIRMATION_FORM_SUBMIT';
export const EVENT_INPUT_SUBMIT = 'EVENT_INPUT_SUBMIT';
const MODAL_CLOSE = 'MODAL_CLOSE';
const EVENT_MODAL_OPEN = 'EVENT_MODAL_OPEN';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

const NO_CONFIRMATION_MODAL_OPEN = 'NO_CONFIRMATION_MODAL_OPEN';

const USER_INFO_INPUT_CHANGE = 'USER_INFO_INPUT_CHANGE';
export const USER_INFO_FORM_SUBMIT = 'USER_INFO_FORM_SUBMIT';
const CONFIRMATION_DELETE_MODAL_OPEN = 'CONFIRMATION_DELETE_MODAL_OPEN';
export const CONFIRMATION_FORM_DELETE_SUBMIT = 'CONFIRMATION_FORM_DELETE_SUBMIT';
const CONFIRMATION_DELETE_EVENT_MODAL_OPEN = 'CONFIRMATION_DELETE_EVENT_MODAL_OPEN';
export const CONFIRMATION_FORM_DELETE_EVENT_SUBMIT = 'CONFIRMATION_FORM_DELETE_EVENT_SUBMIT';
export const LOGOUT_SUBMIT = ' LOGOUT_SUBMIT';
const RECEIVE_REGISTER = 'RECEIVE_REGISTER';
const RECEIVE_EVENT_CREATE = 'RECEIVE_EVENT_CREATE';
const RECEIVE_EVENT_DELETE = 'RECEIVE_EVENT_DELETE';
/**
 * Traitements
 */

/**
 * Reducer
 */
const menuReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      console.log('Menu-reducer', action.modif);
      return {
        ...state,
        ...action.modif,
      };
    case LOGIN_FORM_SUBMIT:
      return {
        ...state,
        username: '',
        password: '',
        // modalOpened: false,
      };
    case REGISTER_INPUT_CHANGE:
    console.log('Menu-reducer register', action.modif);
      return {
        ...state,
        ...action.modif,
      };
    case REGISTER_FORM_SUBMIT:
    console.log('Menu-reducer: register submit', state.date);
      return {
        ...state,
      };
    case REGISTER_MODAL_OPEN:
      console.log('Menu-reducer OPEN');
      return {
        ...state,
        modalOpened: true,
        activeComponent: 'register',
      };
    case LOGIN_MODAL_OPEN:
      console.log('Menu-reducer LOGIN OPEN');
      return {
        ...state,
        modalOpened: true,
        activeComponent: 'login',
      };
    case CONFIRMATION_MODAL_OPEN:
      console.log('Menu-reducer CONFIRMATION OPEN');
      return {
        ...state,
        modalOpened: true,
        activeComponent: 'confirmation',
      };
    case CONFIRMATION_FORM_SUBMIT:
      console.log('menu-reducer: submit CONFIRMATION');
      return {
        ...state,
        modalOpened: false,

      };
    case MODAL_CLOSE:
      console.log('Menu-reducer MODAL CLOSE');
      return {
        ...state,
        modalOpened: false,
      };
    case EVENT_INPUT_SUBMIT:
      console.log('menu-reducer event submit');
      return {
        ...state,
      };
    case EVENT_MODAL_OPEN:
      console.log('Menu-reducer EVENT OPEN');
      return {
        ...state,
        modalOpened: true,
        activeComponent: 'createEvent',
      };
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
        modalOpened: false,
        activeComponent: '',
      };
      case NO_CONFIRMATION_MODAL_OPEN:
      console.log('Menu-reducer CONFIRMATION OPEN');
      return {
        ...state,
        modalOpened: true,
        activeComponent: 'noconfirmation',
      };
    case USER_INFO_INPUT_CHANGE:
    console.log('reducer input', action.modif);
      return {
        ...state,
        ...action.modif,
      };
    case USER_INFO_FORM_SUBMIT:
      return {
        ...state,
        username: '',
        firstname: '',
        lastname: '',
        adress: '',
        email: '',
        city: '',
        postalCode: '',
        birthdate: '',
        picture: '',
      };

    case CONFIRMATION_DELETE_MODAL_OPEN:
      console.log('Menu-reducer CONFIRMATION DELETE OPEN');
      return {
        ...state,
        modalOpened: true,
        activeComponent: 'deleteUser',
      };

    case CONFIRMATION_FORM_DELETE_SUBMIT:
      console.log('menu-reducer: submit DELETE CONFIRMATION');
      return {
        ...state,
        modalOpened: false,
        isAuthenticated: false,
      };

    case CONFIRMATION_DELETE_EVENT_MODAL_OPEN:
      console.log('Menu-reducer CONFIRMATION DELETE EVENT OPEN');
      return {
        ...state,
        ...action.modif,
        modalOpened: true,
        activeComponent: 'deleteEvent',
      };

    case CONFIRMATION_FORM_DELETE_EVENT_SUBMIT:
      console.log('menu-reducer: submit DELETE EVENT CONFIRMATION');
      return {
        ...state,
        modalOpened: false,
      };
      case LOGOUT_SUBMIT:
      return {
        ...state,
        isAuthenticated: false,
        username: '',
        password: '',
      };
      case RECEIVE_REGISTER:
      // console.log('home-reducer', action.data);
        return {
          ...state,
          ...action.data,
          loading: false,
          modalOpened: false,
          username: '',
          password: '',
          firstname: '',
          lastname: '',
          adress: '',
          email: '',
          confirmPassword: '',
          city: '',
          postalCode: '',
          birthdate: '',
          year: '',
          month: '',
          day: '',
          picture: '',
        };
        case RECEIVE_EVENT_CREATE:
        // console.log('home-reducer', action.data);
          return {
            ...state,
            ...action.data,
            loading: false,
            modalOpened: false,
          };
          case RECEIVE_EVENT_DELETE:
          // console.log('home-reducer', action.data);
            return {
              ...state,
              ...action.data,
              loading: false,
            };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const loginInputChange = modif => ({
  type: LOGIN_INPUT_CHANGE,
  modif,
});
export const loginFormSubmit = (username, password) => ({
  type: LOGIN_FORM_SUBMIT,
  username,
  password,

});
export const registerInputChange = modif => ({
  type: REGISTER_INPUT_CHANGE,
  modif,
});
export const registerFormSubmit = (username, password, firstname, lastname, email, adress, city, postalCode, picture, confirmPassword, birthdate) => ({
  type: REGISTER_FORM_SUBMIT,
  username,
  password,
  confirmPassword,
  firstname,
  lastname,
  email,
  adress,
  city,
  postalCode,
  picture,
  birthdate,
});

export const modalOpenRegister = () => ({
  type: REGISTER_MODAL_OPEN,
});

export const modalOpenLogin = () => ({
  type: LOGIN_MODAL_OPEN,
});
export const modalOpenConfirmation = () => ({
  type: CONFIRMATION_MODAL_OPEN,
});

export const modalClose = () => ({
  type: MODAL_CLOSE,
});
export const confirmationFormSubmit = () => ({
  type: CONFIRMATION_FORM_SUBMIT,
});
export const eventFormSubmit = (inputAdress, inputCity, inputZip, inputDescription, inputTitle, startDate, cost) => ({
  type: EVENT_INPUT_SUBMIT,
  inputAdress,
  inputCity,
  inputZip,
  inputDescription,
  inputTitle,
  startDate,
  cost,

});

export const modalOpenEvent = () => ({
  type: EVENT_MODAL_OPEN,
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user,
});

export const modalOpenNoConfirmation = () => ({
  type: NO_CONFIRMATION_MODAL_OPEN,
});

export const userInfoFormSubmit = (id, inputFirstname, inputLastname, inputUsername, inputEmail, inputAddress, inputCity, inputPostalCode) => ({
  type: USER_INFO_FORM_SUBMIT,
  id,
  inputFirstname,
  inputLastname,
  inputUsername,
  inputEmail,
  inputAddress,
  inputCity,
  inputPostalCode,
});

export const userInfoInputChange = modif => ({
  type: USER_INFO_INPUT_CHANGE,
  modif,
});

export const modalOpenConfirmationDeleteUser = id => ({
  type: CONFIRMATION_DELETE_MODAL_OPEN,
  id,
});

export const confirmationFormDeleteSubmit = () => ({
  type: CONFIRMATION_FORM_DELETE_SUBMIT,
});

export const modalOpenConfirmationDeleteEvent = modif => ({
  type: CONFIRMATION_DELETE_EVENT_MODAL_OPEN,
  modif,
});

export const confirmationFormDeleteEventSubmit = () => ({
  type: CONFIRMATION_FORM_DELETE_EVENT_SUBMIT,
});
export const logoutSubmit = () => ({
  type: LOGOUT_SUBMIT,
});

export const receiveRegister = data => ({
  type: RECEIVE_REGISTER,
  data,
});

export const receiveEventCreate = data => ({
  type: RECEIVE_EVENT_CREATE,
  data,
});

export const receiveEventDelete = data => ({
  type: RECEIVE_EVENT_DELETE,
  data,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default menuReducer;
