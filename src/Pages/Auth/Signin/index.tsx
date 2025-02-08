import { classNames } from 'primereact/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import BaseButton from '@src/Components/Button';
import LabelInputText from '@src/Components/Input/LabelInputText';
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
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInput>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        console.log(data);

        navigate(ROUTER_PATHS.ROOT);
    };

    return (
        <div
            className="bg-cover bg-center h-screen flex items-center justify-center shadow shadow-lg"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className={classNames(
                        'flex flex-col items-center justify-center gap-8',
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
                    <LabelInputText
                        rules={{
                            required: 'Email là bắt buộc',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Sai định dạng email',
                            },
                        }}
                        size={48}
                        control={control}
                        errors={errors}
                        label="Email*"
                        name="email"
                        aria-describedby="email-help"
                    />
                    <LabelInputText
                        rules={{ required: 'Mật khẩu là bắt buộc' }}
                        size={48}
                        label="Password*"
                        control={control}
                        errors={errors}
                        name="password"
                        aria-describedby="password-help"
                    />
                    <div className="w-full flex flex-col gap-2">
                        <BaseButton type="submit" className="w-full" label="Đăng nhập" />
                        <BaseButton
                            type="button"
                            className="w-full"
                            severity="secondary"
                            label="Đăng nhập bằng tài khoản công ty"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signin;
