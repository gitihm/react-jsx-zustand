import create from 'zustand'
import { persist } from 'zustand/middleware'

export const UserStore = create(persist((set) => ({
  user: "user",
  userList: [],
  setUser: (data) => {
    set({ user: data })
  },
  setUserList: (data) => {
    set({ userList: data })
  }
}), {
  name: "user",
  getStorage: () => sessionStorage,
}))




















// const useStore = create(set => ({
//   bears: 0,
//   increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 })
// }))