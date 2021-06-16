import React from 'react'
import classnames from 'classnames'
import './importIcons'
import './icon.scss'
interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string
}
const Icon: React.FunctionComponent<IconProps> = ({ name, className, ...restProps }) => {
    return (
        <svg className={classnames("iceui-icon", className)} {...restProps}>
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
}
export default Icon