import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import 'jest-localstorage-mock'

const mockStore = (state, container) => {
  const middlewares = [thunk.withExtraArgument(container), multi]
  return configureMockStore(middlewares)(state)
}
global.mockStore = mockStore

