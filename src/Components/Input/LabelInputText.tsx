/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, InputProps } from 'antd';
import classNames from 'classnames';
import { Control, Controller, FieldErrors, FieldValues, Path, UseControllerProps } from 'react-hook-form';

export interface LabelInputTextProps<T extends FieldValues = any> extends InputProps {
    name: Path<T>;
    control: Control<T, any>;
    errors?: FieldErrors<T>;
    label?: string;
    rules?: UseControllerProps<T>['rules'];
    renderErrors?: (errors: FieldErrors<T>) => React.ReactNode;
}

const LabelInputText = <T extends FieldValues = any>({
    name,
    rules,
    label,
    control,
    errors,
    renderErrors,
    ...props
}: LabelInputTextProps<T>) => {
    return (
        <div className="field">
            <span className="p-float-label">
                <Controller
                    name={name}
                    control={control}
                    rules={rules}
                    render={({ field }) => <Input id={field.name} {...field} {...props} />}
                />
                <label htmlFor={name} className={classNames({ 'p-error': errors?.[name] })}>
                    {label}
                </label>
            </span>
            {errors?.[name] && (
                <span className="p-error text-sm">
                    {renderErrors ? renderErrors(errors) : String(errors?.[name]?.message)}
                </span>
            )}
        </div>
    );
};

export default LabelInputText;
