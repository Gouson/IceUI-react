import React from 'react';
import Icon from './icon';

const IconExample: React.FunctionComponent = () => {
    return (
        <div>
             <Icon name="microsoft" />
            <Icon name="google" />
            <Icon name="alipay" />
            <Icon name="wechat" />
            <Icon name="qq" />
            <Icon name="baidu" />
        </div>
    );
};

export default IconExample;