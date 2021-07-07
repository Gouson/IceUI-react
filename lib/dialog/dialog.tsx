
import { scopedClassMaker } from "../classes";
import React, { Fragment, ReactElement, ReactFragment, ReactNode } from "react";
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
                    {
                        props.buttons && props.buttons.length > 0 &&
                        <footer className={sc('footer')}>
                            {props.buttons && props.buttons.map((button, index) => React.cloneElement(button, { key: index }))}
                        </footer>
                    }
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

const x = (content: any, buttons?: Array<ReactElement>) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component =
        <Dialog
            visible={true}
            onClose={() => {
                onClose()
            }}
            buttons={buttons}
        >
            {content}
        </Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
    return onClose
}


const alert = (content: string,) => {
    const onClose = x(content, [<button onClick={() => { onClose() }}>OK</button>])
}
const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        onClose()
        yes && yes()
    }
    const onNo = () => {
        onClose()
        no && no()
    }
    const buttons = [<button onClick={onYes}>yes</button>, <button onClick={onNo}>no</button>]
    const onClose = x(content, buttons)

}
const modal = (content: ReactNode | ReactFragment) => {
    return x(content)
}
export { confirm, alert, modal }
export default Dialog