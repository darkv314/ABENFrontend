import React, { useMemo, useState } from "react";
import ErrMsg from "../errMsg/ErrMsg";
import { Controller, useFormContext } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";
import { errMsgRequired } from "../../../../helpers/helpers";

function SelectInputForm({ id, label, options, validations }) {
    function getOptions() {
        return options.map((option) => {
            return option?.nombre;
        });
    }

    function handleChange(option) {
        setSelectedOption(option);
    }

    const newOptions = useMemo(getOptions, [options]);
    const { errors, control } = useFormContext();
    const [selectedOption, setSelectedOption] = useState(newOptions[0]);

    return (
        <div className="input-form">
            <label htmlFor={"analisis"}>{label}</label>
            {/* {console.log(newOptions)} */}
            <Controller
                name={id}
                control={control}
                rules={{
                    required: errMsgRequired,
                }}
                defaultValue={selectedOption}
                render={({ field: { onChange, value } }) => (
                    <div className="select-input">
                        <Autocomplete
                            id={id}
                            disable
                            value={value}
                            options={newOptions}
                            onChange={(event, option) => {
                                handleChange(option);
                                onChange(option);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    sx={{ outline: "none" }}
                                />
                            )}
                        />
                    </div>
                )}
            ></Controller>
            <ErrMsg errors={errors[id]} />
        </div>
    );
}

export default SelectInputForm;
