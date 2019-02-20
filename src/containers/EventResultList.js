import { connect } from 'react-redux';
import EventResultList from 'src/components/EventResultList';
import { listInputChange, listData, listFormSubmit, tagListData } from 'src/store/reducers/list-reducer';

const mapStateToProps = state => ({
  cookingWorkshops: state.list.cookingWorkshops,
  user: state.list.user,
  inputCity: state.list.inputCity,
  inputTags: state.list.inputTags,
  inputLevel: state.list.inputLevel,
  id: state.list.id,
});

const mapDispatchToProps = dispatch => ({
  listData: () => {
    dispatch(listData());
  },
  listInputChange: (modif) => {
    dispatch(listInputChange(modif));
  },
  listFormSubmit: () => {
    dispatch(listFormSubmit());
  },
  tagListData: (id) => {
    dispatch(tagListData(id));
  },
});

const EventResultListContainer = connect(mapStateToProps, mapDispatchToProps)(EventResultList);

export default EventResultListContainer;
