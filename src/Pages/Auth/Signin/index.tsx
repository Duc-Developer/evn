import { Form } from 'antd';
import { FormProviderProps } from 'antd/es/form/context';
import classNames from 'classnames';
import { useNavigate } from 'react-router';
import BaseButton from '@src/Components/Button';
import LabelInputText from '@src/Components/Input/LabelInputText';
import { ROUTER_PATHS } from '@src/Routes';
import logoIcon from '@assets/icons/evn.svg';
import bgSrc from '@assets/images/sigin_background.png';

const Signin = () => {
    const navigate = useNavigate();
    const backgroundImageUrl = new URL(bgSrc, import.meta.url).href;

    const onSubmit: FormProviderProps['onFormFinish'] = (name, data) => {
        console.log(name, data);
        navigate(ROUTER_PATHS.ROOT);
    };

    return (
        <div
            className="bg-cover bg-center h-screen flex items-center justify-center shadow shadow-lg"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
            }}
        >
            <Form.Provider onFormFinish={onSubmit}>
                <Form
                    name="layout-multiple-horizontal"
                    layout="horizontal"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    className={classNames('bg-white bg-opacity-90', 'w-128', 'rounded-lg shadow-lg !p-8')}
                >
                    <h1 className="text-center text-2xl font-bold">HỆ THỐNG QUẢN LÝ ĐÀO TẠO</h1>
                    <div className="m-auto w-fit flex items-center gap-2 mt-4">
                        <img src={logoIcon} alt="logo" width={64} />
                        <h2 className="text-2xl font-bold text-blue-900">EVN</h2>
                    </div>
                    <LabelInputText
                        formItemProps={{
                            className: '!mb-4',
                            rules: [{ required: true, message: 'Vui lòng nhập email' }],
                        }}
                        size="large"
                        label="Email"
                        placeholder="Nhập địa chỉ email"
                        name="email"
                        aria-describedby="email-help"
                    />
                    <LabelInputText
                        size="large"
                        formItemProps={{
                            className: '!mb-8',
                            labelCol: { span: 24 },

                            rules: [{ required: true, message: 'Mật khẩu là bắt buộc' }],
                        }}
                        label="Password"
                        placeholder="Nhập mật khẩu"
                        name="password"
                        aria-describedby="password-help"
                    />
                    <div className="w-full flex flex-col gap-2">
                        <BaseButton type="primary" size="large" htmlType="submit" className="w-full">
                            Đăng nhập
                        </BaseButton>
                        <BaseButton type="default" size="large" className="w-full">
                            Đăng nhập bằng tài khoản công ty
                        </BaseButton>
                    </div>
                </Form>
            </Form.Provider>
        </div>
    );
};

export default Signin;
