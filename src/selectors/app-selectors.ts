import { RootState } from "../redux/store"

export const tasksSelector = (state: RootState) => state.app.tasks
export const typeSelector = (state: RootState) => state.app.type