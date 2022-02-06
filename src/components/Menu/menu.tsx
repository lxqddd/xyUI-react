import React, { createContext, FC, useState } from "react"
import classNames from "classnames"
import { IMenuProps, IMenuContext, IMenuItemProps } from './types'

export const MenuContext = createContext<IMenuContext>({
  index: '0'
})

const Menu: FC<IMenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children, defaultOpenSubMenus, ...restProps } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('xy-menu', className, {
    [`xy-menu-vertical`]: mode === 'vertical',
    'xy-menu-horizontal': mode !== 'vertical'
  })

  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive || '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<IMenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement,{
          index: index.toString()
        })
      }
      return console.error('Warning: Menu has a child which is not a MenuItem component!')
    })
  }
  return (
    <ul className={classes} style={style} { ...restProps }>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
}

export default Menu
