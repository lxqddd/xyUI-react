import React, { cloneElement, FC, FunctionComponentElement, useContext, useState } from "react"
import classNames from "classnames"
import { ISubMenuProps, IMenuItemProps } from './types'
import { MenuContext } from './menu'

const SubMenu: FC<ISubMenuProps> = ({ index, title, className, children, ...restProp }) => {
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpend = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
  const classes = classNames('xy-menu-item xy-submenu-item', className, {
    'is-active': context.index === index
  })
  const [ menuOpen, setOpen ] = useState(isOpend)
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  }: {}
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter:  (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
  } : {}
  const renderChildren = () => {
    const subMenuClasses = classNames('xy-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<IMenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component!')
      }
    })
    return (
      <ul className={subMenuClasses}>{childrenComponent}</ul>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents} { ...restProp }>
      <div className="subMenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu