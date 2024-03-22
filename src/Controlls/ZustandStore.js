import { create } from 'zustand'


export const useQuestionStore = create((set) => ({
  questions: [],
  setQuestions: (questions) => set((state) => ({ questions: questions})),
  clearQuestions: () => set({ questions: [] }),
}))

export const useScoreStore = create((set)=>({
    score:0,
    addPoint: () => set((state) => ({score: state.score +1})),
    resetPoint: () => set((state)=> ({score: 0}))
}))