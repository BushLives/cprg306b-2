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
        <div className="py-1 text-slate-950">
            {required && <span className="text-red-500">*</span>}
            <label>{label}: </label>
            <div className="border border-slate-600 rounded p-1 mt-0.5">
                {children}
            </div>         
            {hint && !error && <p className="text-slate-400">{hint}</p>}

            {error && (
                <p className="text-red-500" role="alert">{error}</p>
            )}
        </div>
    )
}

export default FormField