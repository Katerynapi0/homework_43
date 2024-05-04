import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validateEmail = (value) => {
    let error;
    if(!value){
        error = 'Email - обов\'язкове значення';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        error = 'Некоректний email';
    }
    return error;
};

const validatePhone = (value) => {
    let error;
    if(!value){
        error = 'Номер мобільного обов\'язковий';
    }else if(!/^\d{12}$/i.test(value)) {
        error = 'Мобільний телефон має складатися з 12 цифр'
    }
    return error;
};

const MyForm = () => (
    <Formik
    initialValues={{name: '', email: '', phone: ''}}
    onSubmit={(values, action) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            action.setSubmitting(false);
        }, 500);
    }}
    >
        {({ isSubmitting }) => (
            <Form>
                <div>
                    <label htmlFor="name">Ім'я</label>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                </div>
                <div>
                    <label htmlFor="email">Email(ел.пошта)*</label>
                    <Field type="email" name="email" validate={validateEmail} />
                    <ErrorMessage name="email" component="div" />
                </div>
                <div>
                    <label htmlFor="phone">Номер мобільного телефону*</label>
                    <Field type="text" name="phone" validate={validatePhone} />
                    <ErrorMessage name="phone" component="div" />
                </div>
                <button type="submit" disabled={isSubmitting}>
                    Підтвердити
                </button>
            </Form>
        )}
    </Formik>
);

export default MyForm;