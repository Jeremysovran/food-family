import axios from 'axios';
import setAuthorizationToken from 'src/utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { LOAD_HOME, receiveHomeData } from 'src/store/reducers/home-reducer';
import {
  LOGIN_FORM_SUBMIT, setCurrentUser, REGISTER_FORM_SUBMIT, LOGOUT_SUBMIT, receiveRegister, receiveEventCreate, receiveEventDelete,
  EVENT_INPUT_SUBMIT, CONFIRMATION_FORM_SUBMIT, USER_INFO_FORM_SUBMIT, CONFIRMATION_FORM_DELETE_SUBMIT, CONFIRMATION_FORM_DELETE_EVENT_SUBMIT,
} from 'src/store/reducers/menu-reducer';
import {
  FETCH_DATA, sendData, REACTION_SUBMIT, sendReaction, COMMENT_INPUT_SUBMIT, receiveUserData,
  RESPONSE_INPUT_SUBMIT, USER_DATA, sendComment, USER_EVENT, USER_HISTORY, sendConfirmation,
} from 'src/store/reducers/event-reducer';

import {
  LIST_DATA, receiveListData, LIST_FORM_SUBMIT, receiveFilterdData, TAG_LIST_DATA,
} from 'src/store/reducers/list-reducer';

const url = 'http://217.70.190.71:8080/api/';
const urlLogin = 'http://217.70.190.71:8080/api/login_check';
const urlRegister = 'http://217.70.190.71:8080/api/signup';
const urlCreateEvent = 'http://217.70.190.71:8080/api/cookingworkshops/new';
const urlList = 'http://217.70.190.71:8080/api/cookingworkshops/list';


const ajaxMiddleware = store => next => (action) => {
  const state = store.getState();
  // Je veux vérifier si l'action que je reçois m'intéresse
  switch (action.type) {
    case LOAD_HOME:
      // Je veux faire une requête axios
      axios.get(url)
        .then((result) => {
          // console.log(result.data);

          store.dispatch(receiveHomeData(result.data));
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;

    case LOGIN_FORM_SUBMIT:
      axios({
        method: 'POST',
        url: urlLogin,
        data: {
          username: action.username,
          password: action.password,
        },
      })
        .then((result) => {
          const token = result.data.token;
          // console.log(result.data);
          localStorage.setItem('jwtToken', token);
          setAuthorizationToken(token);
          store.dispatch(setCurrentUser(jwtDecode(token)));

          axios.get(url)
            .then((result) => {
              // console.log(result.data);
              store.dispatch(receiveUserData(result.data));
            })
            .catch((error) => {
              // console.log(error);
            });
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;

    case REGISTER_FORM_SUBMIT:
      axios({
        method: 'POST',
        url: urlRegister,
        data: {
          firstname: action.firstname,
          lastname: action.lastname,
          username: action.username,
          email: action.email,
          password: action.password,
          confirmPassword: state.menu.confirmPassword,
          address: action.adress,
          postalCode: action.postalCode,
          city: action.city,
          birthdate: '1988-09-11',
          picture: null,
        },
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      })
        .then((result) => {
          // console.log('register mid. ', result);
          store.dispatch(receiveRegister(result.data));
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;

    case USER_DATA:
      axios({
        url: `http://217.70.190.71:8080/api/users/${action.id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
        .then((result) => {
          // console.log(result.data);
          store.dispatch(sendData(result.data));
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;
      // récupérer un atelier en particulier
    case FETCH_DATA:
      let keybearer = {};
      // console.log('localstorage', localStorage.getItem('jwtToken'));
      if (localStorage.getItem('jwtToken')) {
        // console.log('test if');
        keybearer = {
          url: `http://217.70.190.71:8080/api/cookingworkshops/${action.id}`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
          },
        };
      }
      else {
        // console.log('test else');
        keybearer = {
          url: `http://217.70.190.71:8080/api/cookingworkshops/${action.id}`,
          method: 'GET',
        };
      }
      axios(keybearer)
        .then((result) => {
          // console.log(result.data);
          store.dispatch(sendData(result.data));
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;

    case REACTION_SUBMIT:
      axios({
        method: 'GET',
        url: `http://217.70.190.71:8080/api/cookingworkshops/${action.id}/toggle/${action.value}`,
      })
        .then((result) => {
          // console.log(result.data);
          store.dispatch(sendReaction(result.data));
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;

    case COMMENT_INPUT_SUBMIT:
      axios({
        method: 'POST',
        url: `http://217.70.190.71:8080/api/cookingworkshops/${action.id}/new-question`,
        data: {
          description: action.inputComment,
        },
      })
        .then((result) => {
          // console.log('register mid. ', result.data);
          store.dispatch(sendComment(result.data));
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;
    case RESPONSE_INPUT_SUBMIT:
      axios({
        method: 'POST',
        url: `http://217.70.190.71:8080/api/questions/${action.id}/new-answer`,
        data: {
          description: action.inputResponse,
        },
      })
        .then((result) => {
          // console.log('register mid. ', result.data);
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;

      case EVENT_INPUT_SUBMIT:
      
      axios({
        method: 'POST',
        url: urlCreateEvent,
        data: {
          title: action.inputTitle,
          description: action.inputDescription,
          address: action.inputAdress,
          postalCode: action.inputZip,
          city: action.inputCity,
          date: action.startDate,
          picture: state.home.inputPhoto,
          cost: state.home.inputCookie,
          level: state.home.inputDifficulty,
          nbPlace: state.home.inputParticipant,
          tags: [49, 50],
        },
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      })
        .then((result) => {
          // console.log('register mid. ', result);
          store.dispatch(receiveEventCreate(result.data));
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;

      case CONFIRMATION_FORM_SUBMIT:
      axios({
        method: 'GET',
        url: `http://217.70.190.71:8080/api/cookingworkshops/${state.event.id}/register`,
      })
        .then((result) => {
          // console.log(result.data);
          store.dispatch(sendConfirmation(result.data));
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;

    case LIST_DATA:
      // Je veux faire une requête axios
      axios.get(urlList)
        .then((result) => {
          // console.log(result.data);

          store.dispatch(receiveListData(result.data));
        })
        .catch((error) => {
          // console.log(error);
        });

      next(action);
      break;

    case USER_EVENT:
      axios({
        url: `http://217.70.190.71:8080/api/cookingworkshops/organizer/${action.id}`,
        method: 'GET',
      })
        .then((result) => {
          // console.log(result.data);
          store.dispatch(sendData(result.data));
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;

    case USER_HISTORY:
      axios({
        url: `http://217.70.190.71:8080/api/cookingworkshops/participant/${action.id}`,
        method: 'GET',
      })
        .then((result) => {
          // console.log(result.data);
          store.dispatch(sendData(result.data));
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;

    case USER_INFO_FORM_SUBMIT:
      axios({
        method: 'PUT',
        url: `http://217.70.190.71:8080/api/users/${action.id}`,
        data: {
          firstname: action.inputFirstname == null ? state.event.firstname : action.inputFirstname,
          lastname: action.inputLastname == null ? state.event.lastname : action.inputLastname,
          username: action.inputUsername == null ? state.event.username : action.inputUsername,
          email: action.inputEmail == null ? state.event.email : action.inputEmail,
          address: action.inputAddress == null ? state.event.address : action.inputAddress,
          postalCode: action.inputPostalCode == null ? state.event.postalCode : action.inputPostalCode,
          city: action.inputCity == null ? state.event.city : action.inputCity,
          birthdate: state.event.birthdate,
          // picture: action.picture,
        },
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      })
        .then((result) => {
          // console.log('register mid. ', result);
          // todo send data
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;

    case LIST_FORM_SUBMIT:
      // console.log(state.list.user.city);
      state.list.inputTags == '' ? 
        axios({
        url: `http://217.70.190.71:8080/api/cookingworkshops/list/?city=${state.list.inputCity == '' ? state.list.user.city : state.list.inputCity}`,
        method: 'GET',
      }) 
      .then((result) => {
        // console.log(result.data);
        store.dispatch(receiveFilterdData(result.data));
      })
      .catch((error) => {
        // console.log(error);
      })
      : axios({
          url: `http://217.70.190.71:8080/api/cookingworkshops/list/?city=${state.list.inputCity == '' ? state.list.user.city : state.list.inputCity}&level=${state.list.inputLevel == '' ? 2 : state.list.inputLevel}&tag=${state.list.inputTags}`,
          method: 'GET',
        })
        .then((result) => {
          // console.log(result.data);
        store.dispatch(receiveFilterdData(result.data));
      })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;

      case CONFIRMATION_FORM_DELETE_SUBMIT:
        axios({
          method: 'DELETE',
          url: `http://217.70.190.71:8080/api/users/${state.event.id}`,
        })
        .then((result) => {
          // console.log(result.data);
          localStorage.removeItem('jwtToken');
          setAuthorizationToken(false);
          store.dispatch(setCurrentUser({}));

          axios.get(url)
            .then((result) => {
              // console.log(result.data);
              store.dispatch(receiveUserData(result.data));
            })
            .catch((error) => {
              // console.log(error);
            });
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;

    case TAG_LIST_DATA:
      // Je veux faire une requête axios
      axios({
        url: `http://217.70.190.71:8080/api/cookingworkshops/list/?city=${state.home.user.city}tag=${action.id}`,
        method: 'GET',
      })
        .then((result) => {
          // console.log(result.data);
        })
        .catch((error) => {
          // console.log(error);
        });
      next(action);
      break;

    case CONFIRMATION_FORM_DELETE_EVENT_SUBMIT:
      axios({
        method: 'DELETE',
        url: `http://217.70.190.71:8080/api/cookingworkshops/${state.menu.idAtelier}`,
      })
        .then((result) => {
        // console.log(result.data);
          store.dispatch(receiveEventDelete(result.data));
        })
        .catch((error) => {
        // console.log(error);
        });
      next(action);
      break;

    case LOGOUT_SUBMIT:

      localStorage.removeItem('jwtToken');
      setAuthorizationToken(false);
      store.dispatch(setCurrentUser({}));

      axios.get(url)
        .then((result) => {
          // console.log(result.data);
          store.dispatch(receiveUserData(result.data));
        })
        .catch((error) => {
          // console.log(error);
        });

      next(action);
      break;
    default:
      next(action);
  }
};

export default ajaxMiddleware;
