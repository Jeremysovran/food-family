/**
 * Initial State
 */
const initialState = {
  inputComment: '',
  inputResponse: '',
  detail: '',
  questionsCookingWorkshop: [],
  newQuestion: '',
  userConfirm: '',
  participate: '',
  longitude: false,
  latitude: false,
  organizedCookingWorkshops: [],
  nbOrganizedCookingWorkshops: 0,
  id: 0,
  participatedCookingWorkshops: [],

};

/**
 * Types
 */


const COMMENT_INPUT_CHANGE = 'COMMENT_INPUT_CHANGE';
export const COMMENT_INPUT_SUBMIT = 'COMMENT_INPUT_SUBMIT';
const RESPONSE_INPUT_CHANGE = 'RESPONSE_INPUT_CHANGE';
export const RESPONSE_INPUT_SUBMIT = 'RESPONSE_INPUT_SUBMIT';

export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';
export const USER_DATA = 'USER_DATA';

export const FETCH_DATA = 'FETCH_DATA';
export const SEND_DATA = 'SEND_DATA';
export const REACTION_SUBMIT = 'REACTION_SUBMIT';
export const SEND_REACTION = 'SEND_REACTION';
export const SEND_COMMENT = ' SEND_COMMENT';
const SEND_CONFIRMATION = 'SEND_CONFIRMATION';

export const USER_EVENT = 'USER_EVENT';
export const USER_HISTORY = 'USER_HISTORY';

/**
 * Traitements
 */
/**
 * Reducer
 */
const eventReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case COMMENT_INPUT_CHANGE:
      // console.log('event-reducer', action.modif);
      return {
        ...state,
        ...action.modif,
      };
    case COMMENT_INPUT_SUBMIT:
      // console.log('event-reducer submit');
      return {
        ...state,
        inputComment: '',
        newQuestion: '',
      };
    case RESPONSE_INPUT_CHANGE:
      // console.log('event-reducer response', action.modif);
      return {
        ...state,
        ...action.modif,
      };
    case RESPONSE_INPUT_SUBMIT:
      // console.log('event-reducer submit Response');
      return {
        ...state,
        inputResponse: '',
      };
    case FETCH_DATA:
      // console.log('fetch event-reducer');
      return {
        ...state,
        userConfirm: '',
      };
    case USER_DATA:
      // console.log('fetch event-reducer');
      return {
        ...state,
      };
    case SEND_DATA:
      // console.log(action.datas);
      return {
        ...state,
        ...action.datas,
      };
    case REACTION_SUBMIT:
      // console.log('event-reducer REACTION_SUBMIT');
      return {
        ...state,
      };
    case SEND_REACTION:
      // console.log(action.dataReaction);
      return {
        ...state,
        feelings: action.dataReaction.newFeelings,
      };
    case RECEIVE_USER_DATA:
      // console.log('fetch event-reducer');
      return {
        ...state,
        ...action.data,
      };
    case SEND_COMMENT:
      // console.log('send comment', action.dataComment);
      return {
        ...state,
        questionsCookingWorkshop: action.dataComment.questionsCookingWorkshop,
      };
    case SEND_CONFIRMATION:
      // console.log('send comment', action.dataConfirmation);
      return {
        ...state,
        ...action.dataConfirmation.cookingWorkshop,
        userConfirm: action.dataConfirmation.user,
      };
    case USER_EVENT:
    // console.log('fetch event-reducer');
      return {
        ...state,
      };
    case USER_HISTORY:
    // console.log('fetch event-reducer');
      return {
        ...state,
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const commentInputChange = modif => ({
  type: COMMENT_INPUT_CHANGE,
  modif,
});
export const commentFormSubmit = (id, inputComment) => ({
  type: COMMENT_INPUT_SUBMIT,
  id,
  inputComment,
});
export const commentResponseInputChange = modif => ({
  type: RESPONSE_INPUT_CHANGE,
  modif,
});
export const commentResponseFormSubmit = (id, inputResponse) => ({
  type: RESPONSE_INPUT_SUBMIT,
  id,
  inputResponse,
});

export const fetchData = id => ({
  type: FETCH_DATA,
  id,
});

export const userData = id => ({
  type: USER_DATA,
  id,
});

export const sendData = datas => ({
  type: SEND_DATA,
  datas,
});
export const handleReaction = (value, id) => ({
  type: REACTION_SUBMIT,
  value,
  id,
});
export const sendReaction = dataReaction => ({
  type: SEND_REACTION,
  dataReaction,
});

export const receiveUserData = data => ({
  type: RECEIVE_USER_DATA,
  data,
});

export const sendComment = dataComment => ({
  type: SEND_COMMENT,
  dataComment,
});

export const sendConfirmation = dataConfirmation => ({
  type: SEND_CONFIRMATION,
  dataConfirmation,
});
export const userEvent = id => ({
  type: USER_EVENT,
  id,
});

export const userHistory = id => ({
  type: USER_HISTORY,
  id,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default eventReducer;
