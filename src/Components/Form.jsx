import React, {useState, useEffect} from "react";
import Field from "./Field";

function FormBuilder(props){

    const colors = props.colors?props.colors:{primary: "#11998e", secondary: "#38ef7d", text: "#060606", border: "#9b9b9b"}

    useEffect(() => {
        document.documentElement.style.setProperty('--primary', colors.primary);
        document.documentElement.style.setProperty('--secondary', colors.secondary);
        document.documentElement.style.setProperty('--text', colors.text);
        document.documentElement.style.setProperty('--border', colors.border);
    }, []);

    const gap = props.gap?props.gap:"1rem";
    const gridColumns = props.gridColumns?props.gridColumns:"2"

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
            <h1 className={title.classes ? title.classes : null}>{title.text}</h1>
            <form>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${gridColumns}, 1fr)`, gap: '1rem' }}>
                    {formFields.map((field, index) => (
                        <div key={index} style={{ gridColumn: `span ${Math.min(field.gridSpan, gridColumns)}` }}>
                            <Field data={field} updateVal={handleChange} />
                        </div>
                    ))}
                </div>
                <button
                    type="submit"
                    className={submit_btn.classes ? submit_btn.classes : null}
                    onClick={handleSubmit}
                >
                    {submit_btn.text}
                </button>
            </form>
        </div>
    )
}

export default FormBuilder;