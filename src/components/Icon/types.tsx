import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IBaseIconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}
