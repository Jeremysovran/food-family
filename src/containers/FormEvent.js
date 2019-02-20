import { connect } from 'react-redux';
import FormEvent from 'src/components/FormEvent';
import {
  commentInputChange, commentFormSubmit,
} from 'src/store/reducers/event-reducer';

const mapStateToProps = state => ({
  inputComment: state.event.inputComment,
  id: state.event.id,

});

const mapDispatchToProps = dispatch => ({
  commentInputChange: (modif) => {
    dispatch(commentInputChange(modif));
  },
  commentFormSubmit: (id, inputComment) => {
    dispatch(commentFormSubmit(id, inputComment));
  },
});

const CommentFormContainer = connect(mapStateToProps, mapDispatchToProps)(FormEvent);

export default CommentFormContainer;
