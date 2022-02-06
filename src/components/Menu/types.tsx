export type MenuMode = 'horizontal' | 'vertical'
export type selectedCallback = (selectedIndex: string) => void

export interface IMenuProps {
  defaultIndex?: string
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: selectedCallback,
  defaultOpenSubMenus?: string[]
}

export interface IMenuItemProps {
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

export interface IMenuContext {
  index?: string
  onSelect?: selectedCallback
  mode?: MenuMode
  defaultOpenSubMenus?: string[]
}

export interface ISubMenuProps {
  index?: string
  title: string
  className?: string
}
