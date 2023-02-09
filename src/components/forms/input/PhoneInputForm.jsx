import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller } from "react-hook-form";
import {
    errMsgRequired,
    errMsgPhone,
    CODE_CHECK,
} from "../../../helpers/helpers";
import ErrMsg from "../errMsg/ErrMsg";

function PhoneInputForm({ control, errors }) {
    return (
        <div className="input-form">
            {/* <p className="error">{errors?.message}</p> */}
            <label htmlFor="phone">Teléfono celular</label>
            <Controller
                name="phone"
                control={control}
                rules={{
                    required: errMsgRequired,
                    pattern: {
                        value: CODE_CHECK,
                        message: errMsgPhone,
                    },
                }}
                render={({ field: { onChange } }) => (
                    <PhoneInput
                        country={"bo"}
                        placeholder="+591 777 111 22"
                        id="phone"
                        inputStyle={{
                            width: "100%",
                            border: "none",
                            fontFamily: "inherit",
                        }}
                        buttonStyle={{ border: "none" }}
                        regions={["south-america"]}
                        onChange={onChange}
                    />
                )}
            ></Controller>
            <ErrMsg errors={errors} />
        </div>
    );
}

export default PhoneInputForm;
