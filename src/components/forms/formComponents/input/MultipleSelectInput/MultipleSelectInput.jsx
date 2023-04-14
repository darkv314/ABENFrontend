import { useMemo, useState } from "react";
import ErrMsg from "../../errMsg/ErrMsg";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";
import { errMsgRequired } from "../../../../../helpers/helpers";
import { useEffect } from "react";

function MultipleSelectInput({ id, label, options, index }) {
    const [optionList, setOptionList] = useState([]);

    useEffect(() => {
        setOptionList([
            <SelectInputForm
                id={id}
                label={label}
                options={options}
                key={index}
                setOptionList={setOptionList}
                index={index}
                count={0}
            />,
        ]);
    }, []);

    return (
        <div className="input-form analisis-form">
            {optionList.map((option) => {
                return option;
            })}
        </div>
    );
}

export default MultipleSelectInput;

function SelectInputForm({ id, label, options, setOptionList, count, index }) {
    function getOptions() {
        return options.map((option) => {
            return option?.nombre;
        });
    }

    function handleChange(option) {
        // console.log(selectedOption, option, index);
        control.unregister(`${selectedOption}-${index}`);
        setSelectedOption(option);
    }

    const newOptions = useMemo(getOptions, [options]);
    const { errors, control } = useFormContext();
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        setSelectedOption(control._fields[id]["_f"]?.value || "");
    }, []);

    useEffect(() => {
        if (selectedOption) {
            if (options.find((opt) => opt.nombre === selectedOption)?.options) {
                setOptionList((prev) => [
                    ...prev.slice(0, count + 1),
                    <SelectInputForm
                        id={`${selectedOption}-${index}`}
                        label={"Opciones"}
                        options={
                            options.find((opt) => opt.nombre === selectedOption)
                                ?.options
                        }
                        key={selectedOption}
                        count={count + 1}
                        index={index}
                        setOptionList={setOptionList}
                    />,
                ]);
            }
        }
    }, [selectedOption]);

    return (
        <div className="input-form">
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
                            value={value}
                            options={newOptions}
                            onChange={(event, option) => {
                                handleChange(option);
                                onChange(option);
                            }}
                            renderInput={(params) => (
                                <TextField {...params} label={label} />
                            )}
                        />
                    </div>
                )}
            ></Controller>
            <ErrMsg errors={errors[id]} />
        </div>
    );
}
