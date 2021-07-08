import React from "react";
import { scopedClassMaker } from "../classes";
const sc = scopedClassMaker('iceui-layout')
import './layout.scss'
import classnames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLElement> {
    className?: string
}
const Header: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props
    return (
        <div className={classnames(props.className, sc('header'))} {...rest}>
            {props.children}
        </div>
    )
}

export default Header