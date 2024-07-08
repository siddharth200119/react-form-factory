import React from "react";
import "./Field.css";

function Field(props){
    const data = props.data;

    switch(data.type){
        case "text": 
        case "email":
        case "password":
            return(
                <div className="form__group field">
                    <input 
                        type={data.type} 
                        id={data.name} 
                        disabled={data.disabled} 
                        value={data.value} 
                        name={data.name} 
                        onChange={props.updateVal} 
                        placeholder={data.placeholder} 
                        className="form__field" 
                        required 
                    />
                    <label htmlFor={data.name} className="form__label">{data.label}</label>
                </div>
            );
        case "number":
        case "datetime-local":
        case "date":
            return(
                <div className="form__group field">
                    <input 
                        type={data.type} 
                        id={data.name} 
                        disabled={data.disabled} 
                        value={data.value} 
                        name={data.name} 
                        onChange={props.updateVal} 
                        placeholder={data.placeholder} 
                        min={data.minValue} 
                        max={data.maxValue} 
                        step={data.stepSize} 
                        className="form__field--date" 
                        required 
                    />
                    <label htmlFor={data.name} className="form__label">{data.label}</label>
                </div>
            )
        case "textarea":
            return(
                <div className="form__group field">
                    <textarea 
                        id={data.name} 
                        value={data.value} 
                        disabled={data.disabled} 
                        name={data.name} 
                        rows={data.rows}
                        cols={data.cols}
                        onChange={props.updateVal} 
                        className="form__field" 
                        required 
                    />
                    <label htmlFor={data.name} className="form__label">{data.label}</label>
                </div>
            )
        case "file":
            return(
                <div className="form__group field">
                    <input 
                        type={data.type} 
                        id={data.name} 
                        disabled={data.disabled} 
                        name={data.name} 
                        accept={data.accept} 
                        multiple={data.multiple ? true : undefined} 
                        required 
                    />
                    <label htmlFor={data.name} className="form__label">{data.label}</label>
                </div>
            );
        case "dropdown":
            return (
                <div className="form__group field">
                    <select
                        id={data.name}
                        name={data.name}
                        value={data.value}
                        onChange={props.updateVal}
                        disabled={data.disabled}
                        className="form__field"
                        required
                    >
                        {data.options.map((option, index) => (
                            <option key={index} disabled={option.disabled} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <label htmlFor={data.name} className="form__label">{data.label}</label>
                </div>
            );
        case "radio":
            return (
                <div className="form__group">
                    <label className="form__label--inline">{data.label}</label>
                    {data.options.map((option, index) => (
                        <div key={index} className="form__radio-group">
                            <input
                                type="radio"
                                id={`${data.name}_${option.value}`}
                                name={data.name}
                                disabled={option.disabled}
                                value={option.value}
                                checked={data.value === option.value}
                                onChange={props.updateVal}
                                className="form__radio"
                                required
                            />
                            <label htmlFor={`${data.name}_${option.value}`} className="form__label--inline">
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
            );
        case "checkbox":
            return (
                <div className="form__group">
                    <label className="form__label--inline">{data.label}</label>
                    {data.options.map((option, index) => (
                        <div key={index} className="form__checkbox-group">
                            <input
                                type="checkbox"
                                id={`${data.name}_${option.value}`}
                                name={data.name}
                                disabled={option.disabled}
                                value={option.value}
                                checked={data.checkedValues.includes(option.value)}
                                onChange={function(e){
                                    const index = data.checkedValues.indexOf(option.value)
                                    if(index===-1){
                                        data.checkedValues.push(option.value)
                                    }else{
                                        data.checkedValues.splice(index, 1)
                                    }
                                    props.updateVal(e, option.value)
                                }}
                                className="form__checkbox"
                                required
                            />
                            <label htmlFor={`${data.name}_${option.value}`} className="form__label--inline">
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
            );
        default:
            return null;
    }
}

export default Field;
