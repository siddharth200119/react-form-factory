import React, {useState} from "react";

function formBuilder(props){
    const fields = props.fields;
    const title = props.title?props.title:"Form";

    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => {
            acc[field.name] = field.value;
            return acc;
        }, {})
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return(
        <div>
            <h1 className={`${title.classes?title.classes:""}`}></h1>
            <form>
                {fields.map((field, index)=>(
                    <div key={index}>
                        <label>{field.label}</label>
                        <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default formBuilder;