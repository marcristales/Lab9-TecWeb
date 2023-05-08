import Button from "./Button"

export default {
    title: 'Calculator/Button',
    component: Button,
    tags: ['autodocs']
}

export const Light = {
    args: {
        theme: 'light',
    }
}

export const Dark = {
    args: {
        theme: 'dark',
    }
}

export const Equals = {
    args: {
        type: 'equals',
        value: '=',
        theme: 'dark',
    }
}