
import { scopedClassMaker } from "../classes";
import React, { Fragment } from "react";
import Icon from "../icon/icon";
import './dialog.scss'
interface Props {
    visible: boolean;
}

const scopedClass = scopedClassMaker('iceui-dialog')
const sc = scopedClass
const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <Fragment>
                <div className={sc('musk')}></div>
                <div className={sc()}>
                    <div className={sc("close")}>
                        <Icon name="close"></Icon>
                    </div>
                    <header className={sc('header')}>提示</header>
                    <main className={sc('main')}>{props.children}</main>
                    <footer className={sc('footer')}>
                        <button>1</button>
                        <button>2</button>
                    </footer>
                </div>
            </Fragment>
            :
            null
    )
}
export default Dialog