import { render, fireEvent, screen } from "@testing-library/react"
import { unmountComponentAtNode } from "react-dom"
import { Provider } from "react-redux"
import store from "../../redux/store"
import AddButton from "./AddButton"


let container: any = null
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div")
  document.body.appendChild(container)
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container)
  container.remove()
  container = null
})


describe('test component AddButton', () => {
    test('test input is null', () => {
        render(<Provider store={store}><AddButton/></Provider>)
        const btn = screen.getByTestId('Button')
        const input = screen.getByTestId('Input')
        expect(input).toContainHTML('')
    })
    test('test input change', () => {
        render(<Provider store={store}><AddButton/></Provider>)
        const input = screen.getByTestId('Input')
        fireEvent.change(input, {target: {value: '123'}})
        expect(input).toContainHTML('123')
    })
    test('test button click', () => {
        render(<Provider store={store}><AddButton/></Provider>)
        const input = screen.getByTestId('Input')
        const btn = screen.getByTestId('Button')
        fireEvent.change(input, {target: {value: 'купить машину'}})
        fireEvent.click(btn)
        expect(input).toContainHTML('')
    })
})
