import * as events from '../../constants/events'
import * as types from '../../constants/actionTypes'
import * as timerActions from '../../actions/timerActions'
import * as selectors from '../../selectors'

export const initialData = () => (dispatch, getState) => {
  const state = getState()
  const socket = selectors.getSocket(state)

  socket.emit(events.INITIAL_DATA)
}

export const onInitialData = (data) => (dispatch, getState) => {
  const { entry } = data

  const onInitialSuccess = () => ({
    type: types.GLOBAL_SUCCESS,
    payload: {
      entry,
      types: data.types,
    },
  })

  dispatch(onInitialSuccess())
  dispatch(timerActions.set())

  // if (entry.running) {
  //   dispatch(timerActions.onGoOn(entry))
  // }
}