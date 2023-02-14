import { Provider } from 'react-redux'
import Header from './components/Header/Header'
import ToDoList from './components/ToDoList/ToDoList'
import store from './redux/store'

const App = () => {
  return (
  <Provider store={store}>
    <Header />
    <ToDoList />
  </Provider>
  )
}

export default App
