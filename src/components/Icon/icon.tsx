import React, { FC } from "react"
import classNames from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IBaseIconProps } from './types'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { IconProp, library } from "@fortawesome/fontawesome-svg-core"
library.add(fas)

const Icon: FC<IBaseIconProps> = (props) => {
  const { className, theme, icon, ...restProps } = props
  const classes = classNames('xy-icon', className, {
    [`icon-${theme}`]: theme
  })
  return <FontAwesomeIcon className={classes} icon={icon as IconProp} { ...restProps } />
}

export default Icon