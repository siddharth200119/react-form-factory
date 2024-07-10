import React, { useState, useEffect } from "react";
import Field from "./Field";
import './Field.css'

function FormBuilder(props) {
    const defaultStyles = {
        colorPrimary: "#11998e",
        colorSecondary: "#38ef7d",
        colorText: "#060606",
        colorError: "red",
        colorBorder: "#9b9b9b",
        paddingTopBottom: "15px",
        marginTop: "10px",
        fontSize: "1.3rem",
        fontSizeSmall: "0.8rem",
        fontSizeLabel: "1rem",
        fontSizeError: "1rem",
        paddingField: "7px 0",
        paddingBottomFocus: "6px",
        borderWidth: "2px",
        borderWidthFocus: "3px",
        buttonBg: "#11998e",
        buttonColor: "#ffffff",
        buttonPadding: "10px 20px",
        buttonBorderRadius: "5px",
        buttonFontSize: "1rem",
        buttonMarginTop:"1rem"
    };

    const styles = props.styles ? props.styles : {};

    useEffect(() => {
        Object.keys(defaultStyles).forEach(key => {
            if (styles.key !== undefined) {
                document.documentElement.style.setProperty(`--${key}`, styles[key]);
            } else {
                document.documentElement.style.setProperty(`--${key}`, defaultStyles[key]);
            }
        });
    });

    const gap = props.gap ? props.gap : "1rem";
    const gridColumns = props.gridColumns ? props.gridColumns : "2";

    // fields
    const fields = props.fields;
    const [formFields, setFormFields] = useState(fields);

    // process title
    var title;
    if (props.title !== undefined) {
        if (typeof props.title === 'string') {
            title = { text: props.title, classes: "testing" }
        } else {
            title = props.title;
        }
    } else {
        title = { text: "Form", classes: "testing" }
    }

    // process submit btn
    var submit_btn;
    if (props.submit_btn !== undefined) {
        if (typeof props.submit_btn === 'string') {
            submit_btn = { text: props.submit_btn, classes: "testing" }
        } else {
            submit_btn = props.submit_btn;
        }
    } else {
        submit_btn = { text: "Submit", classes: "testing" }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;
        const newFormFields = formFields.map((field) => {
            let error = false;
            let errorMessage = "";

            // Required validation
            if (field.required && !field.value) {
                error = true;
                errorMessage = "This field is required.";
            }

            // Minimum length validation
            if (field.min && field.value.length < field.min) {
                error = true;
                errorMessage = `Minimum value is ${field.min}.`;
            }

            // Maximum length validation
            if (field.max && field.value.length > field.max) {
                error = true;
                errorMessage = `Maximum value is ${field.max}.`;
            }

            // Step size validation
            if (field.step && (field.value % field.step !== 0)) {
                error = true;
                errorMessage = `Value must be a multiple of ${field.step}.`;
            }

            // Maximum number of checkboxes checked validation
            if (field.maxChecked && Array.isArray(field.value) && field.value.length > field.maxChecked) {
                error = true;
                errorMessage = `You can select up to ${field.maxChecked} options.`;
            }

            // Minimum number of checkboxes checked validation
            if (field.minChecked && Array.isArray(field.value) && field.value.length < field.minChecked) {
                error = true;
                errorMessage = `You must select at least ${field.minChecked} options.`;
            }

            // Regex validation
            if (field.regex && !new RegExp(field.regex).test(field.value)) {
                error = true;
                errorMessage = `Value does not match the required pattern.`;
            }

            // Custom function validation
            if (field.customValidation && typeof field.customValidation === 'function' && !field.customValidation(field.value)) {
                error = true;
                errorMessage = `Custom validation failed.`;
            }

            if (error) {
                valid = false;
            }

            return { ...field, error: error, errorMessage: errorMessage };
        });

        setFormFields(newFormFields);

        if (valid) {
            const formData = newFormFields.reduce((acc, field) => {
                acc[field.name] = field.value;
                return acc;
            }, {});

            if (typeof props.onSubmit === 'function') {
                props.onSubmit(formData);
            } else if (typeof props.onSubmit === 'string') {
                try {
                    const response = await fetch(props.onSubmit, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    });
                    const result = await response.json();
                    console.log('Form submitted to URL:', result);
                } catch (error) {
                    console.error('Error submitting form:', error);
                }
            } else {
                console.log('Form Data Submitted:', formData);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields((prevFields) =>
            prevFields.map((field) =>
                field.name === name ? { ...field, value: value, error: false, errorMessage: "" } : field
            )
        );
    };

    return (
        <div>
            <h1 className={title.classes ? title.classes : null}>{title.text}</h1>
            <form>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${gridColumns}, 1fr)`, gap: gap }}>
                    {formFields.map((field, index) => (
                        <div key={index} style={{ gridColumn: `span ${Math.min(field.gridSpan, gridColumns)}` }}>
                            <Field data={field} updateVal={handleChange} />
                        </div>
                    ))}
                </div>
                <button
                    type="submit"
                    className={"form__submit " + (submit_btn.classes ? submit_btn.classes : null)}
                    onClick={handleSubmit}
                >
                    {submit_btn.text}
                </button>
            </form>
        </div>
    );
}

export default FormBuilder;
