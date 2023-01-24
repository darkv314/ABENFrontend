import "./inputForm.css";

function InputForm({ id, label, type }) {
    return (
        <div className="input-form">
            <label htmlFor={id}>{label}</label>
            <input type={type} />
        </div>
    );
}

export default InputForm;
