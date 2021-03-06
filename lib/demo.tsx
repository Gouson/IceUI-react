import React, { useState } from 'react'
import Highlight, { defaultProps } from "prism-react-renderer";
interface Props {
    code: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
    const [codeVisiable, setCodeVisiable] = useState(false);
    return (
        <div>
            <div>
                {props.children}
            </div>
            <div>
                <button onClick={() => setCodeVisiable(!codeVisiable)}>{codeVisiable ? '收起代码' : '查看代码'}</button>
                {codeVisiable && <Highlight {...defaultProps} code={props.code} language="jsx">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>}
            </div>
        </div>
    )
}

export default Demo