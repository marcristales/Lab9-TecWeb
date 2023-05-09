import React from "react"
import { render, screen } from "@testing-library/react"

import Button from "./Button"
import { it } from "vitest"

describe('Componente Button', () => {
    it('Renderiza el componente', () => {
        render(<Button />)
    })
})