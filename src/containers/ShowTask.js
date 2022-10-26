import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Task from '../components/Task';

const mapStateToProps = (state, route) => ({
  task: state.todos[route.match.params.id - 1],
}
);

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(push('/'));
  },
});

const ShowTask = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task);

export default ShowTask;
