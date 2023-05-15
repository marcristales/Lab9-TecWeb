import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"

import Calculator from "./Calculator"
import { describe, it } from "vitest"

describe('Componente Calculator', () => {
    it('Renderiza el componente', () => {
        render(<Calculator />)
    })

    it('Cambia el tema al hacer clic en el botón "Cambiar tema"', () => {
        render(<Calculator />)

        const cambiarTemaButton = screen.getByText('Cambiar tema')
        fireEvent.click(cambiarTemaButton)
    })

    it('Realiza la suma correctamente', () => {
        render(<Calculator />)

        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('1')
        const button2 = screen.getByText('2')
        const addButton = screen.getByText('+')
        const equalsButton = screen.getByText('=')

        fireEvent.click(button1)
        fireEvent.click(addButton)
        fireEvent.click(button2)
        fireEvent.click(equalsButton)

        expect(display.textContent).toBe('3')
    })

    it('Realiza la multiplicacion correctamente', () => {
        render(<Calculator />)

        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('2')
        const button2 = screen.getByText('5')
        const multButton = screen.getByText('x')
        const equalsButton = screen.getByText('=')

        fireEvent.click(button1)
        fireEvent.click(multButton)
        fireEvent.click(button2)
        fireEvent.click(equalsButton)

        expect(display.textContent).toBe('10')
    })

    it('Realiza la division correctamente', () => {
        render(<Calculator />)

        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('1')
        const button2 = screen.queryAllByText('0')[1]
        const divButton = screen.getByText('÷')
        const button3 = screen.getByText('2')
        const equalsButton = screen.getByText('=')

        fireEvent.click(button1)
        fireEvent.click(button2)
        fireEvent.click(divButton)
        fireEvent.click(button3)
        fireEvent.click(equalsButton)

        expect(display.textContent).toBe('5')
    })

    it('Actualiza el display al presionar un botón', () => {
        render(<Calculator />)

        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('1')
        const button2 = screen.getByText('2')

        fireEvent.click(button1)
        expect(display.textContent).toBe('1')

        fireEvent.click(button2)
        expect(display.textContent).toBe('12')
    })

    it('Reinicia el estado al hacer clic en el botón "AC"', () => {
        render(<Calculator />)

        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('6')
        const clearButton = screen.getByText('AC')

        fireEvent.click(button1)
        fireEvent.click(clearButton)

        expect(display.textContent).toBe('0')
    })

    it('Funciona el decimal', () => {
        render(<Calculator />)

        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('.')
        const button2 = screen.getByText('2')

        fireEvent.click(button1)
        fireEvent.click(button2)

        expect(display.textContent).toBe('0.2')
    })

    it('No acepta mas de 9 digitos', () => {
        render(<Calculator />)

        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('2')

        for (let i = 0; i < 11; i++) {
            fireEvent.click(button1)
        }

        expect(display.textContent).toBe('222222222')
    })

    it('No acepta mas de 9 digitos incluso con mult', () => {
        render(<Calculator />)

        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('2')
        const multButton = screen.getByText('x')
        const button2 = screen.getByText('5')
        const equalsButton = screen.getByText('=')

        for (let i = 0; i < 9; i++) {
            fireEvent.click(button1)
        }
        fireEvent.click(multButton)
        fireEvent.click(button2)
        fireEvent.click(equalsButton)

        expect(display.textContent).toBe('ERROR')
    })
    
    it('No acepta mas de 9 digitos incluso con mult', () => {
        render(<Calculator />)

        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('2')
        const multButton = screen.getByText('x')
        const button2 = screen.getByText('5')
        const equalsButton = screen.getByText('=')

        for (let i = 0; i < 9; i++) {
            fireEvent.click(button1)
        }
        fireEvent.click(multButton)
        fireEvent.click(button2)
        fireEvent.click(equalsButton)

        expect(display.textContent).toBe('ERROR')
    })
    
    it('No acepta mas de 9 digitos incluso con div', () => {
        render(<Calculator />)

        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('8')
        const divButton = screen.getByText('÷')
        const button2 = screen.getByText('6')
        const equalsButton = screen.getByText('=')

        fireEvent.click(button1)
        fireEvent.click(divButton)
        fireEvent.click(button2)
        fireEvent.click(equalsButton)

        expect(display.textContent).toBe('ERROR')
    })
    
    it('El boton +/- funciona', () => {
        render(<Calculator />)

        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('8')
        const button2 = screen.getByText('±')

        fireEvent.click(button1)
        fireEvent.click(button2)

        expect(display.textContent).toBe('-8')
    })

})