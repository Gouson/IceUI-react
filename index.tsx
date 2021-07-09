import ReactDOM from 'react-dom'
import React from 'react'
import './index.scss'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
// tslint:disable-next-line
import logo from './lib/icons/logo.jpg'
// const logo = require('./lib/icons/logo.jpg')
ReactDOM.render(<Router>
    <div>
        <header>
            <div className="logo">
                <img src={logo} alt="" style={{ width: '64px', height: '64px' }} />
            </div>

        </header>
        <div>
            <aside>
                <h2>组件</h2>
                <ul className="example-ul">
                    <li>
                        <NavLink to="/icon">Icon</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialog">Dialog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/layout">Layout</NavLink>
                    </li>
                </ul>
            </aside>
            <main>
                <Route path="/icon" component={IconDemo} />
                <Route path="/dialog" component={DialogExample} />
                <Route path="/layout" component={LayoutExample} />
            </main>
        </div>
    </div>
</Router>, document.querySelector('#root'))