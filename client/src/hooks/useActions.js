import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { ticketsActions } from '../redux/slices/ticketsSlice';

const rootActions = {
  ...ticketsActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(rootActions, dispatch);
};

export default useActions;
