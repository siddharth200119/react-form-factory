
# React Form Builder

A dynamic form builder component for React applications. This component allows you to create customizable forms with various input types and validations.


## Features

- Supports multiple input types: text, password, checkboxes, radio, dropdown, date, datetime-local, file input, number, textarea.
- Customizable form title and submit button.
- Validations for required fields, regex patterns, min/max values, and max checked items.
- Displays error messages for validation failures.


## Installation

```bash
  npm install react-json-form-factory
```
    
## Usage

```javascript
import FormBuilder from "react-json-form-factory"

const formFields=[
    {
        "type": "text",
        "name": "firstName",
        "label": "First Name",
        "value": "",
        "placeholder": "Enter your first name",
    },
    {
        "type": "text",
        "name": "lastName",
        "label": "Last Name",
        "value": "",
        "placeholder": "Enter your last name",
    },
    {
        "type": "email",
        "name": "email",
        "label": "Email",
        "value": "",
        "placeholder": "Enter your email",
    }
]

function App() {
  return <FormBuilder fields={formFields} title={{"text": "My Form"}}/>
}
```

![App Screenshot](https://raw.githubusercontent.com/siddharth200119/react-form-factory/main/screenshots/demo.png)

