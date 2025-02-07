import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { ROUTER_PATHS } from '@src/Routes';
import logoIcon from '@assets/icons/evn.svg';
import bgSrc from '@assets/images/sigin_background.png';

type FormInput = {
    email: string;
    password: string;
};
const Signin = () => {
    const navigate = useNavigate();
    const backgroundImageUrl = new URL(bgSrc, import.meta.url).href;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormInput>({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    return (
        <div
            className="bg-cover bg-center h-screen flex items-center justify-center shadow shadow-lg"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
            }}
        >
            <div
                className={classNames(
                    'flex flex-col items-center justify-center gap-4',
                    'bg-white bg-opacity-90',
                    'w-128',
                    'rounded-lg shadow-lg p-8',
                )}
            >
                <h1 className="text-2xl font-bold">HỆ THỐNG QUẢN LÝ ĐÀO TẠO</h1>
                <div className="flex items-center gap-2">
                    <img src={logoIcon} alt="logo" width={64} />
                    <h2 className="text-2xl font-bold text-blue-900">EVN</h2>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <InputText
                        {...register('email', { required: true })}
                        size={48}
                        id="email"
                        aria-describedby="email-help"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <InputText
                        {...register('password', { required: true })}
                        size={48}
                        id="password"
                        aria-describedby="password-help"
                    />
                </div>
                <Button className="w-full" label="Đăng nhập" onClick={() => navigate(ROUTER_PATHS.ROOT)} />
                <Button className="w-full" severity="secondary" label="Đăng nhập bằng tài khoản công ty" />
            </div>
        </div>
    );
};

export default Signin;
