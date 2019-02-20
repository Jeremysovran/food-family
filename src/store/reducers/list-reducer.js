/**
 * Initial State
 */
const initialState = {
  cookingWorkshops: [],
  inputCity: '',
  inputTags: '',
  inputLevel: '',
  id: '',
};

/**
 * Types
 */
const RECEIVE_LIST_DATA = 'RECEIVE_LIST_DATA';
export const LIST_DATA = 'LIST_DATA';
export const TAG_LIST_DATA = 'TAG_LIST_DATA';
const LIST_INPUT_CHANGE = 'LIST_INPUT_CHANGE';
export const LIST_FORM_SUBMIT = 'LIST_FORM_SUBMIT';
const RECEIVE_FILTER_DATA = 'RECEIVE_FILTER_DATA';
/**
 * Traitements
 */
/**
 * Reducer
 */
const listReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LIST_INPUT_CHANGE:
      console.log('list-reducer', action.modif);
      return {
        ...state,
        ...action.modif,
      };
      case LIST_FORM_SUBMIT:
      console.log('list-reducer: list submit');
        return {
          ...state,
        };
      case LIST_DATA:
       // console.log('fetch list event-reducer');
       return {
         ...state,
         inputCity: '',
         inputTags: '',
         inputLevel: '',
       };
       case RECEIVE_LIST_DATA:
       // console.log('fetch event-reducer');
        return {
          ...state,
          ...action.data,
          inputCity: '',
          inputTags: '',
          inputLevel: '',
        };
        case RECEIVE_FILTER_DATA:
        console.log(action.datas);
        return {
          ...state,
          ...action.data,
        };
        case TAG_LIST_DATA:
        // console.log('fetch list event-reducer');
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
export const listInputChange = modif => ({
  type: LIST_INPUT_CHANGE,
  modif,
});

export const receiveListData = data => ({
  type: RECEIVE_LIST_DATA,
  data,
});

export const listData = () => ({
  type: LIST_DATA,
});

export const listFormSubmit = () => ({
  type: LIST_FORM_SUBMIT,
});
export const receiveFilterdData = data => ({
  type: RECEIVE_FILTER_DATA,
  data,
});

export const tagListData = id => ({
  type: TAG_LIST_DATA,
  id,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default listReducer;
