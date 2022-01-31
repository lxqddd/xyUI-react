import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import Button from './components/Button/button'
import { ButtonType, ButtonSize } from './components/Button/types'

ReactDOM.render(
  <React.StrictMode>
    <h1>size</h1>
    <Button size={ButtonSize.Small} >hello world</Button>
    <Button size={ButtonSize.Default} >hello world</Button>
    <Button size={ButtonSize.Large} >hello world</Button>
    <hr />
    <h1>type</h1>
    <Button btnType={ButtonType.Info} >hello world</Button>
    <Button btnType={ButtonType.Primary} >hello world</Button>
    <Button btnType={ButtonType.Success} >hello world</Button>
    <Button btnType={ButtonType.Warning} >hello world</Button>
    <Button btnType={ButtonType.Danger} >hello world</Button>
    <Button btnType={ButtonType.Link} >hello world</Button>
    <hr />
    <h1>disabled</h1>
    <Button btnType={ButtonType.Info} disabled >hello world</Button>
    <Button btnType={ButtonType.Primary} disabled >hello world</Button>
    <Button btnType={ButtonType.Success} disabled >hello world</Button>
    <Button btnType={ButtonType.Warning} disabled >hello world</Button>
    <Button btnType={ButtonType.Danger} disabled >hello world</Button>
    <Button btnType={ButtonType.Link} disabled >hello world</Button>
    <hr />
    <h1>round</h1>
    <Button size={ ButtonSize.Small } btnType={ButtonType.Info} round >hello world</Button>
    <Button size={ ButtonSize.Small } btnType={ButtonType.Primary} round >hello world</Button>
    <Button size={ ButtonSize.Small } btnType={ButtonType.Success} round >hello world</Button>
    <Button size={ ButtonSize.Small } btnType={ButtonType.Warning} round >hello world</Button>
    <Button size={ ButtonSize.Small } btnType={ButtonType.Danger} round >hello world</Button>
    <Button size={ ButtonSize.Small } btnType={ButtonType.Link} round >hello world</Button>
    <br /><br />
    <Button btnType={ButtonType.Info} round >hello world</Button>
    <Button btnType={ButtonType.Primary} round >hello world</Button>
    <Button btnType={ButtonType.Success} round >hello world</Button>
    <Button btnType={ButtonType.Warning} round >hello world</Button>
    <Button btnType={ButtonType.Danger} round >hello world</Button>
    <Button btnType={ButtonType.Link} round >hello world</Button>
    <br /><br />
    <Button size={ ButtonSize.Large } btnType={ButtonType.Info} round >hello world</Button>
    <Button size={ ButtonSize.Large } btnType={ButtonType.Primary} round >hello world</Button>
    <Button size={ ButtonSize.Large } btnType={ButtonType.Success} round >hello world</Button>
    <Button size={ ButtonSize.Large } btnType={ButtonType.Warning} round >hello world</Button>
    <Button size={ ButtonSize.Large } btnType={ButtonType.Danger} round >hello world</Button>
    <Button size={ ButtonSize.Large } btnType={ButtonType.Link} round >hello world</Button>
    <hr />

    <h1>plain</h1>
    <Button size={ ButtonSize.Small } btnType={ButtonType.Info} round plain >hello world</Button>
    <Button size={ ButtonSize.Small } btnType={ButtonType.Primary} round plain >hello world</Button>
    <Button size={ ButtonSize.Small } btnType={ButtonType.Success} round plain >hello world</Button>
    <Button size={ ButtonSize.Small } btnType={ButtonType.Warning} round plain >hello world</Button>
    <Button size={ ButtonSize.Small } btnType={ButtonType.Danger} round plain >hello world</Button>
    <Button size={ ButtonSize.Small } btnType={ButtonType.Link} round plain >hello world</Button>
    <br /><br />
    <Button btnType={ButtonType.Info} round plain >hello world</Button>
    <Button btnType={ButtonType.Primary} round plain >hello world</Button>
    <Button btnType={ButtonType.Success} round plain >hello world</Button>
    <Button btnType={ButtonType.Warning} round plain >hello world</Button>
    <Button btnType={ButtonType.Danger} round plain >hello world</Button>
    <Button btnType={ButtonType.Link} round plain >hello world</Button>
    <br /><br />
    <Button size={ ButtonSize.Large } btnType={ButtonType.Info} round plain >hello world</Button>
    <Button size={ ButtonSize.Large } btnType={ButtonType.Primary} round plain >hello world</Button>
    <Button size={ ButtonSize.Large } btnType={ButtonType.Success} round plain >hello world</Button>
    <Button size={ ButtonSize.Large } btnType={ButtonType.Warning} round plain >hello world</Button>
    <Button size={ ButtonSize.Large } btnType={ButtonType.Danger} round plain >hello world</Button>
    <Button size={ ButtonSize.Large } btnType={ButtonType.Link} round plain >hello world</Button>
    <br /><hr />

    <h1>plain disabled</h1>
    <Button btnType={ButtonType.Info} round plain disabled >hello world</Button>
    <Button btnType={ButtonType.Primary} round plain disabled >hello world</Button>
    <Button btnType={ButtonType.Success} round plain disabled >hello world</Button>
    <Button btnType={ButtonType.Warning} round plain disabled >hello world</Button>
    <Button btnType={ButtonType.Danger} round plain disabled >hello world</Button>
    <Button btnType={ButtonType.Link} round plain disabled >hello world</Button>
  </React.StrictMode>,
  document.getElementById('root')
)
