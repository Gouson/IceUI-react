import ReactDOM from 'react-dom'
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import IconExample from './icon/icon.example';
import DialogExample from './dialog/dialog.example';
ReactDOM.render(<Router>
    <div>
        <header>
            <div className="logo">
                test
            </div>

        </header>
        <div>
            <aside>
                <h2>组件</h2>
                <ul>
                    <li>
                        <Link to="/icon">Icon</Link>
                    </li>
                    <li>
                        <Link to="/dialog">Dialog</Link>
                    </li>
                </ul>
            </aside>
            <main>
                <Route path="/icon" component={IconExample} />
                <Route path="/dialog" component={DialogExample} />
            </main>
        </div>
    </div>
</Router>, document.querySelector('#root'))