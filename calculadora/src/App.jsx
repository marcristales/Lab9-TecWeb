import './App.css'
import Calculator from './components/Calculator/Calculator'
import Display from './components/Display/Display'
import { useState } from 'react'
import Keyboard from './components/Keyboard/Keyboard'
import Button from './components/Button/Button'

function App() {
  const [theme, setTheme] = useState('dark')
  const [inputValue, setInputValue] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operator, setOperator] = useState(null)

  const botones = [
    ['AC', '±', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ]

  const cambiarTema = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleButtonClick = (buttonValue) => {
    switch (buttonValue) {
      case "AC":
        setInputValue("0")
        setPreviousValue(null)
        setOperator(null)
        break
      case "±":
        setInputValue((inputValue) => (inputValue.startsWith("-") ? inputValue.slice(1) : "-" + inputValue))
        break
      case "%":
        setInputValue((inputValue) => (parseFloat(inputValue) / 100).toString())
        break
      case ".":
        if (!inputValue.includes(".")) {
          setInputValue((inputValue) => inputValue + ".")
        }
        break
      case "÷":
      case "x":
      case "-":
      case "+":
        setOperator(buttonValue)
        setPreviousValue(inputValue)
        setInputValue("0")
        break
      case "=":
        if (operator && previousValue && inputValue) {
          let result
          switch (operator) {
            case "÷":
              result = parseFloat(previousValue) / parseFloat(inputValue)
              break
            case "x":
              result = parseFloat(previousValue) * parseFloat(inputValue)
              break
            case "-":
              result = parseFloat(previousValue) - parseFloat(inputValue)
              result = result < 0 ? 'ERROR' : result
              break
            case "+":
              result = parseFloat(previousValue) + parseFloat(inputValue)
              break
            default:
              break
          }
          const resultString = result.toString()
          if (resultString.length > 9) {
            setInputValue('ERROR')
          } else {
            setInputValue(resultString)
          }
          setPreviousValue(null)
          setOperator(null)
        }
        break
      default:
        if (inputValue.length < 9) {
          setInputValue((inputValue === "0" ? buttonValue : inputValue + buttonValue))
        }
        break
    }
  }

  return (
    <>
      <div className='cambiarTema'>
        <Button value='Cambiar tema' onClick={cambiarTema} theme={theme} />
      </div>
      <div className='container'>
        <div className='calculadora'>
          <Calculator theme={theme}>
            <Display value={inputValue} theme={theme} />
            <Keyboard>
              {botones.flat().map((boton, index) => {
                return (
                  <Button
                    key={index}
                    type={boton === '=' ? 'equals' : ''}
                    value={boton}
                    onClick={() => handleButtonClick(boton)}
                    theme={theme}
                  />
                )
              })}
            </Keyboard>
          </Calculator>
        </div>
      </div>
    </>
  )
}

export default App
