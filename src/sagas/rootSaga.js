import { all }              from 'redux-saga/effects';

export default function* rootSaga() {
  const sagas = [];

  yield all(sagas);
}
