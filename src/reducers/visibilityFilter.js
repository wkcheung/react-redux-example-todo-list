import {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} from '../constants/actionTypes'
import { VisibilityFilters } from '../constants/constants'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
