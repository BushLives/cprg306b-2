import { register } from "module";

type FormFieldProps = {
    label: string;
    error?: string;
    hint?: string;
    required?: boolean;
    children: React.ReactNode
}

const FormField = ({label, error, hint, required =false, children}:FormFieldProps) => {
    return (
        <div>
            {required && <span className="text-red-500">*</span>}
            <label>{label}: </label>
            {children}
            {hint && !error && <p className="text-slate-400">{hint}</p>}

            {error && (
                <p className="text-red-500" role="alert">{error}</p>
            )}
        </div>
    )
}

export default FormField