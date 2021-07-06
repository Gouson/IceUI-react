import React, { useState } from 'react';
import Dialog, { alert } from './dialog'
const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false);
    const [y, setY] = useState(false);
    return (
        <div>
            <div>
                <h1>1</h1>
                <button onClick={() => { setX(!x) }}>切换</button>
                <Dialog visible={x} buttons={[
                    <button onClick={() => { setX(false) }}>确定</button>,
                    <button onClick={() => { setX(false) }}>取消</button>
                ]}
                    onClose={() => { setX(false) }}
                    closeOnClickMask={true}
                >
                    <div>hi</div>
                </Dialog>
            </div>
            <div>
                <h1>2</h1>
                <button onClick={() => { setY(!y) }}>切换</button>
                <Dialog visible={y} buttons={[
                    <button onClick={() => { setY(false) }}>确定</button>,
                    <button onClick={() => { setY(false) }}>取消</button>
                ]}
                    onClose={() => { setY(false) }}
                >
                    <div>hi</div>
                </Dialog>
            </div>
            <div>
                <h1>3</h1>
                <button onClick={() => alert('1')}>点击</button>
            </div>
        </div>
    );
};

export default DialogExample;