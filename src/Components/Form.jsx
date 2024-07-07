import React, {useState} from "react";
import Field from "./Field";

function FormBuilder(props){
    //fields
    const fields = props.fields;
    const [formFields, setFormFields] = useState(fields);

    //process title
    var title;
    if(props.title !== undefined){
        if(typeof props.title === String){
            title = {text: props.title, classes: "testing"}
        }else{
            title = props.title
        }
    }else{
        title = {text: "Form", classes: "testing"}
    }

    //process submit btn
    var submit_btn;
    if(props.submit_btn !== undefined){
        if(typeof props.submit_btn === String){
            submit_btn = {text: props.submit_btn, classes: "testing"}
        }else{
            submit_btn = props.submit_btn
        }
    }else{
        submit_btn = {text: "Submit", classes: "testing"}
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formFields);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields((prevFields) =>
            prevFields.map((field) =>
                field.name === name ? { ...field, value: value } : field
            )
        );
    };

    return(
        <div>
            <h1 className={`${title.classes?title.classes:null}`}>{title.text}</h1>
            <form>
                {formFields.map((field, index)=>(
                    <div key={index}>
                        <Field data={field} updateVal={handleChange}/>
                    </div>
                ))}
                <button type="submit" className={`${submit_btn.classes? submit_btn.classes:null}`} onClick={handleSubmit}>{submit_btn.text}</button>
            </form>
        </div>
    )
}

export default FormBuilder;