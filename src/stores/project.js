import create from 'zustand'
export const ProjectStore = create((set) => ({
  project: "project",
  setProject: (data) => {
    set({ project: data })
  },
}))




















// const useStore = create(set => ({
//   bears: 0,
//   increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 })
// }))