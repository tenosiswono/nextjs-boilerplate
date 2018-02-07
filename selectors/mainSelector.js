import { createSelector } from 'reselect'

export const selectMainState = () => (state) => state.main

export const selectMainData = () => createSelector(
  selectMainState(),
  (subState) => subState.data
)
