// Form.tsx
import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './Contact.css';
import Spinner from '../../components/Spinner/Spinner';

interface FormValues {
    fullName: string;
    email: string;
    subject: string;
    message: string;
}

const initialValues: FormValues = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
};

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('This field is required'),
    email: Yup.string().email('Invalid email format').required('This field is required'),
    subject: Yup.string().required('This field is required'),
    message: Yup.string().required('This field is required'),
});

const onSubmit = (values: FormValues) => {
    // Handle form submission here
    console.log('Form submitted:', values);
};

const Contact: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulating loading time with setTimeout. Replace this with your actual loading logic.

        return () => clearTimeout(timer);
    }, []);
    return (
        <> 
        {loading 
        ? 
        <Spinner />
        :
        <div className="form-container">
            <h1>Contact Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form style={{ width: '100%' }}>
                    <div className='form__top'>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name:</label>
                            <Field type="text" id="fullName" name="fullName" placeholder="Full name" required/>
                            {/* <ErrorMessage name="fullName" component="div" className="error" /> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <Field type="email" id="email" name="email" placeholder="Email" required/>
                            {/* <ErrorMessage name="email" component="div" className="error" /> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <Field type="text" id="subject" name="subject" placeholder="Subject" required/>
                            {/* <ErrorMessage name="subject" component="div" className="error" /> */}
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <Field as="textarea" id="message" name="message" placeholder="Message" required/>
                        {/* <ErrorMessage name="message" component="div" className="error" /> */}
                    </div>

                    <button className="sectionOne__btn" type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    }
        
        </>

    );
};

export default Contact;
