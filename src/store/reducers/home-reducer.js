/**
 * Initial State
 */
const initialState = {
  inputMail: '',
  inputNameEvent: '',
  inputCategory: '',
  inputTitle: '',
  inputPhoto: '',
  inputAdress: '',
  inputZip: '',
  inputCity: '',
  inputDifficulty: '',
  inputDescription: '',
  inputParticipant: '',
  inputCookie: '',
  inputHour: '',
  startDate: new Date(),
  loading: true,
  tags: [],
  cookingWorkshopHasard: {},
  lastCookingWorkshops: [],
  cookingWorkshops: [],
  file: {},
};

/**
 * Types
 */


const EVENT_INPUT_CHANGE = 'EVENT_INPUT_CHANGE';
const DATE_INPUT_CHANGE = 'DATE_INPUT_CHANGE';
const FILE_UPLOAD_CHANGE = 'FILE_UPLOAD_CHANGE';
export const LOAD_HOME = 'LOAD_HOME';
export const RECEIVE_HOME = 'RECEIVE_HOME';
/**
 * Traitements
 */
/**
 * Reducer
 */
const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case EVENT_INPUT_CHANGE:
      // console.log('home-reducer', action.modif);
      return {
        ...state,
        ...action.modif,
      };
    case DATE_INPUT_CHANGE:
      // console.log('home-reducer', action.modif);
      return {
        ...state,
        ...action.modif,
      };
    case FILE_UPLOAD_CHANGE:
      // console.log('home-reducer', action.modif);
      return {
        ...state,
        file: { ...action.modif },
      };
    case LOAD_HOME:
      return {
        ...state,
      };
    case RECEIVE_HOME:
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
export const eventInputChange = modif => ({
  type: EVENT_INPUT_CHANGE,
  modif,
});

export const dateInputChange = modif => ({
  type: DATE_INPUT_CHANGE,
  modif,
});
export const loadHomeData = () => ({
  type: LOAD_HOME,
});
export const receiveHomeData = data => ({
  type: RECEIVE_HOME,
  data,
});

export const fileUpload = modif => ({
  type: FILE_UPLOAD_CHANGE,
  modif,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default homeReducer;
