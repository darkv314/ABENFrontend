import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller } from "react-hook-form";
import {
    errMsgRequired,
    errMsgPhone,
    CODE_CHECK,
} from "../../../../helpers/helpers";
import ErrMsg from "../errMsg/ErrMsg";
import { useFormContext } from "react-hook-form";

function PhoneInputForm() {
    const { control, errors } = useFormContext();
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
                        containerStyle={
                            errors["phone"]
                                ? {
                                      outline: "2px solid red",
                                      borderRadius: "0.2rem",
                                  }
                                : null
                        }
                        country={"bo"}
                        placeholder="+591 777 111 22"
                        id="phone"
                        inputStyle={{
                            width: "100%",
                            border: "none",
                            fontFamily: `"Raleway", sans-serif`,
                        }}
                        buttonStyle={{ border: "none" }}
                        regions={["south-america"]}
                        onChange={onChange}
                    />
                )}
            ></Controller>
            <ErrMsg errors={errors["phone"]} />
        </div>
    );
}

export default PhoneInputForm;
