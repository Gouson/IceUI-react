import React, { ReactElement } from "react";
import { scopedClassMaker } from "../classes";
const sc = scopedClassMaker('iceui')
import './layout.scss'
import classnames from 'classnames';
import Aside from "./aside";

interface Props extends React.HTMLAttributes<HTMLElement> {
    className?: string,
    children: ReactElement | Array<ReactElement>
}
const Layout: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props
    const x = props.children as Array<ReactElement>
    const hasAside = x.length
        && (x)
            .reduce((result, node) => result || node.type === Aside, false)

    return (
        <div className={classnames(props.className, sc('layout'), hasAside && sc('hasAside'))} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout