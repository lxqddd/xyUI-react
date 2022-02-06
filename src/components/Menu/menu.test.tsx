import React from 'react'
import { fireEvent, render, screen, RenderResult, cleanup, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'
import { IMenuProps } from './types'

const testProps: IMenuProps = {
  defaultIndex: '0',
  className: 'test-menu',
  onSelect: jest.fn()
}

const testVerticalProps: IMenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
  defaultOpenSubMenus: [],
  onSelect: jest.fn()
}

const generateMenu = (props: IMenuProps) => {
  return (
    <Menu {...props} data-testid='menu'>
      <MenuItem>active</MenuItem>
      <MenuItem disabled={true}>disabled</MenuItem>
      <MenuItem>menu</MenuItem>
      <SubMenu title='dropdown'>
        <MenuItem>
          submenu 1
        </MenuItem>
        <MenuItem>
          submenu 2
        </MenuItem>
        <MenuItem>
          submenu 3
        </MenuItem>
      </SubMenu>
    </Menu>
  )
}

const createStyleFile = () => {
  const cssFiles: string = `
    .xy-submenu {
      display: none;
    }
    .xy-submenu.menu-opened {
      display: block;
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFiles
  return style
}

let view: RenderResult,
    menuElement: HTMLElement,
    activeElement: HTMLElement,
    disabledElement: HTMLElement

describe('test menu and menuItem component', () => {
  beforeEach(() => { // 每一个case执行之前都会先执行一下这块逻辑
    // eslint-disable-next-line testing-library/no-render-in-setup
    view = render(generateMenu(testProps))
    // eslint-disable-next-line testing-library/no-container
    view.container.append(createStyleFile())
    menuElement = screen.getByTestId('menu')
    activeElement = screen.getByText('active')
    disabledElement = screen.getByText('disabled')
  })

  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('xy-menu test-menu')
    // eslint-disable-next-line testing-library/no-node-access
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
    expect(activeElement).toHaveClass('xy-menu-item is-active')
    expect(disabledElement).toHaveClass('xy-menu-item is-disabled')
  })

  it('click items should change active and call the right callback', () => {
    const thirdMenuItem = screen.getByText('menu')
    fireEvent.click(thirdMenuItem)
    expect(thirdMenuItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
  })

  it('should render vertical mode when mode is set to vertical', () => {
    cleanup()
    render(generateMenu(testVerticalProps))
    menuElement = screen.getByTestId('menu')
    expect(menuElement).toHaveClass('xy-menu-vertical')
  })

  it('mode is horizontal, should show dropdown items when hover on subMenu',async () => {
    expect(screen.queryByText('submenu 1')).not.toBeVisible()
    const dropdownElement = screen.getByText('dropdown')
    fireEvent.mouseEnter(dropdownElement)
    await waitFor(() => {
      expect(screen.queryByText('submenu 1')).toBeVisible()
    }, {
      timeout: 300
    })
    fireEvent.click(screen.getByText('submenu 1'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(dropdownElement)
    await waitFor(() => {
      expect(screen.queryByText('submenu 1')).not.toBeVisible()
    }, {
      timeout: 300
    })
  })
})

describe('test menu component when mode is vertical', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    view = render(generateMenu(testVerticalProps))
    view.container.append(createStyleFile())
  })
  it('mode is vertical, should show dropdown items when click on subMenu', async () => {
    expect(screen.queryByText('submenu 1')).not.toBeVisible()
    const dropdownElement = screen.getByText('dropdown')
    fireEvent.click(dropdownElement)
    await waitFor(() => {
      expect(screen.queryByText('submenu 1')).toBeVisible()
    }, {
      timeout: 300
    })
    fireEvent.click(screen.getByText('submenu 1'))
    expect(testVerticalProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.click(dropdownElement)
    await waitFor(() => {
      expect(screen.getByText('submenu 1')).not.toBeVisible()
    }, {
      timeout: 300
    })
  })
  it('should show submenu when we set defaultOpenSubMenus equal ["3"]', () => {
    expect(screen.queryByText('submenu 1')).not.toBeVisible()
    cleanup()
    testVerticalProps.defaultOpenSubMenus = ['3']
    view = render(generateMenu(testVerticalProps))
    view.container.append(createStyleFile())
    expect(screen.getByText('submenu 1')).toBeVisible()
  })
})