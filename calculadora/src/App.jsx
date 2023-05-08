import './App.css'
import Calculator from './components/Calculator/Calculator'
import Display from './components/Display/Display'
import { useState } from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import Button from './components/Button/Button';

function App() {
  const [theme, setTheme] = useState('dark')

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

  return (
    <>
      <div className='cambiarTema'>
        <Button value='Cambiar tema' onClick={cambiarTema} theme={theme} />
      </div>
      <div className='container'>
        <div className='calculadora'>
          <Calculator theme={theme}>
            <Display value='0' theme={theme} />
            <Keyboard>
              {botones.flat().map((boton, index) => {
                return (
                  <Button
                    key={index}
                    type={boton === '=' ? 'equals' : ''}
                    value={boton}
                    onClick={() => {
                      console.log("Button clicked!");
                    }}
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
