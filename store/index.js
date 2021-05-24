export const state = () => ({
  jobState: false, 
})

export const mutations = {
  
  changeJobState(state) {
    state.jobState = !state.jobState
  },

}