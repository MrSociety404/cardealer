export const state = () => ({
  jobState: false,
  session: ''
})

export const mutations = {
  
  changeJobState(state) {
    state.jobState = !state.jobState
  },

}