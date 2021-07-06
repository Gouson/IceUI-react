
import { scopedClassMaker } from "../classes";
import React, { Fragment, ReactElement } from "react";
import Icon from "../icon/icon";
import './dialog.scss'
import ReactDOM from "react-dom";
interface Props {
    visible: boolean;
    buttons?: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickMask?: boolean
}

const scopedClass = scopedClassMaker('iceui-dialog')
const sc = scopedClass
const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e)
    }
    const onClickMusk: React.MouseEventHandler = (e) => {
        props.closeOnClickMask && props.onClose(e)
    }
    const x = (
        props.visible ?
            <Fragment>
                <div className={sc('musk')} onClick={onClickMusk}></div>
                <div className={sc()}>
                    <div className={sc("close")} onClick={onClickClose}>
                        <Icon name="close"></Icon>
                    </div>
                    <header className={sc('header')}>提示</header>
                    <main className={sc('main')}>{props.children}</main>
                    <footer className={sc('footer')}>
                        {props.buttons && props.buttons.map((button, index) => React.cloneElement(button, { key: index }))}
                    </footer>
                </div>
            </Fragment>
            :
            null
    )
    return ReactDOM.createPortal(
        x,
        document.body
    )
}

Dialog.defaultProps = {
    closeOnClickMask: false
}

const alert = (content: string,) => {
    const component = <Dialog visible={true} onClose={() => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }}>{content}</Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
}

export { alert }
export default Dialog