import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      }
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story: any) => story.objectID !== action.payload),
      }
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 }
    // eslint-disable-next-line no-fallthrough
    default:
      throw new Error(`no mathching "${action.type}" action type`)
  }
}
export default reducer
