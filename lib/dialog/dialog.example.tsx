import React, { useState } from 'react';
import Dialog from './dialog'
const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false);
    return (
        <div>
            <button onClick={() => { setX(!x) }}>切换</button>
            <Dialog visible={x} >
                <div>hi</div>
            </Dialog>
        </div>
    );
};

export default DialogExample; 