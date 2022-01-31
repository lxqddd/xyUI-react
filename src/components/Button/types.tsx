import React from 'react'
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
  Default = 'default'
}

export enum ButtonType {
  Primary = 'primary',
  Info = 'info',
  Danger = 'danger',
  Success = 'success',
  Link = 'link',
  Warning = 'warning'
}

export interface IBaseButtonProps {
 className?: string
 disabled?: boolean
 size?: ButtonSize
 btnType?: ButtonType
 children: React.ReactNode
 href?: string
 plain?: boolean
 round?: boolean
 circle?: boolean
}

export type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
export type AnchorButtonProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>