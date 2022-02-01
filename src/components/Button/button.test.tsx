import React from "react"
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button, { ButtonProps, ButtonType, ButtonSize } from './index'

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Small,
  className: 'test-btn',
  round: true,
  plain: true
}

const linkProps: ButtonProps = {
  btnType: ButtonType.Link,
  href: 'www.baidu.com'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    render(<Button {...defaultProps}>Hello</Button>)
    const element = screen.getByText('Hello')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should render the correct component based on different props', () => {
    render(<Button { ...testProps }>Hello</Button>)
    const element = screen.getByText('Hello')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn btn-primary btn-sm test-btn round plain')
  })

  it('should render a link when btnType equals link and href is provided', () => {
    render(<Button {...linkProps}>link</Button>)
    const element = screen.getByText('link')
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn-link')
  })

  it('should render disabled button when disabled set to true', () => {
    render(<Button { ...disabledProps }>disabled</Button>)
    const element = screen.getByText('disabled')
    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('disabled')
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toBeCalled()
  })
})