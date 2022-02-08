import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
// import Button from './components/Button/button'
// import { ButtonType, ButtonSize } from './components/Button/types'
import MenuItem from './components/Menu/menuItem'
import Menu from './components/Menu/menu'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'

ReactDOM.render(
  <React.StrictMode>
    <Icon icon='campground' theme='primary' size='10x' />
    <h1>menu</h1>
    <Menu 
      onSelect={(index) => {
        console.log(index)
      }}
      mode={'horizontal'}
    >
      <MenuItem>active</MenuItem>
      <MenuItem disabled={true}>disabled</MenuItem>
      <MenuItem>menu</MenuItem>
      <SubMenu title='subMenu'>
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
  </React.StrictMode>,
  document.getElementById('root')
)
