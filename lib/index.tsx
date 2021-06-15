import ReactDOM from 'react-dom'
import React from 'react'
import Icon from './icon'

ReactDOM.render(<div><Icon name="wechat" className="gaokexin" onMouseEnter={() => { console.log('enter') }} onMouseLeave={() => { console.log('leave') }} />
    <Icon name="alipay" />
    <Icon name="wechat" />
</div>, document.querySelector('#root'))