//todo: validations
//todo: disabled
//theming

import React from "react";

function Field(props){
    const data = props.data;

    switch(data.type){
        case "text": 
        case "email":
        case "password":
            return(
                <div>
                    <label htmlFor={data.name}>{data.label}</label>
                    <input type={data.type} id={data.name} value={data.value} name={data.name} onChange={props.updateVal} placeholder={data.placeholder}/>
                </div>
            );
        case "number":
        case "datetime-local":
        case "date":
            return(
                <div>
                    <label htmlFor={data.name}>{data.label}</label>
                    <input type={data.type} id={data.name} value={data.value} name={data.name} onChange={props.updateVal} placeholder={data.placeholder} min={data.minValue} max={data.maxValue} step={data.stepSize}/>
                </div>
            )
        case "textarea":
            return(
                <div>
                    <label htmlFor={data.name}>{data.label}</label>
                    <textarea id={data.name} value={data.value} name={data.name} onChange={props.updateVal}/>
                </div>
            )
        case "file":
            return(
                <div>
                    <label htmlFor={data.name}>{data.label}</label>
                    <input type={data.type} id={data.name} name={data.name} accept={data.accept} multiple={data.multiple ? true : undefined}/>
                </div>
            );
            case "dropdown":
                return (
                    <div>
                        <label htmlFor={data.name}>{data.label}</label>
                        <select
                            id={data.name}
                            name={data.name}
                            value={data.value}
                            onChange={props.updateVal}
                        >
                            {data.options.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                );
                case "radio":
                    return (
                        <div>
                            <label>{data.label}</label>
                            {data.options.map((option, index) => (
                                <div key={index}>
                                    <input
                                        type="radio"
                                        id={`${data.name}_${option.value}`}
                                        name={data.name}
                                        value={option.value}
                                        checked={data.value === option.value}
                                        onChange={props.updateVal}
                                    />
                                    <label htmlFor={`${data.name}_${option.value}`}>
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    );
                    case "checkbox":
                        return (
                            <div>
                                <label>{data.label}</label>
                                {data.options.map((option, index) => (
                                    <div key={index}>
                                        <input
                                            type="checkbox"
                                            id={`${data.name}_${option.value}`}
                                            name={data.name}
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
                                        />
                                        <label htmlFor={`${data.name}_${option.value}`}>
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

export default Field