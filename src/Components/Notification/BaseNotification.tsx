import { notification } from 'antd';
import React, { forwardRef, useImperativeHandle } from 'react';

type MessageNoticeType = 'success' | 'info' | 'warning' | 'error';
const Notice = forwardRef(({ children }: { children: React.ReactNode }, ref: any) => {
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (
        type: MessageNoticeType | string,
        { description, message }: { description?: React.ReactNode; message?: React.ReactNode },
    ) => {
        if (['success', 'info', 'warning', 'error'].includes(type)) {
            api[type as MessageNoticeType]({
                message,
                description,
            });
        }
    };
    useImperativeHandle(ref, () => ({
        open: openNotification,
    }));
    return (
        <>
            {' '}
            {contextHolder}
            {children}
        </>
    );
});

export const BaseNoticeRef = React.createRef<any>();
const BaseNotification = (props: any) => <Notice {...props} ref={BaseNoticeRef} />;
export default BaseNotification;
