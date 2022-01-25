import React from "react";
import { Formik, Form, Field } from "formik";
import { Row, Col } from "reactstrap";

import Page from "../../Page/Page";

import "./contactme.scss";

const ContactMe = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Page className="contactme">
      <h1 className="header">Contact Me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit mauris a libero commodo, vel ornare purus tempus. Vestibulum varius massa et ante tincidunt vestibulum.</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formProps) => (
          <Form className="form contact-form">
            <Row>
              <Col xs={12} md={6}>
                <div className="form-input" id="input-name">
                  <label className="form-label" htmlFor="name">Name</label>
                  <Field name="name" placeholder="Name" />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="form-input" id="input-email">
                  <label className="form-label" htmlFor="name">Email</label>
                  <Field name="email" placeholder="Email" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-input" id="input-message">
                  <label className="form-label" htmlFor="name">Message</label>
                  <Field as="textarea" name="message" placeholder="Message"/>
                </div>
              </Col>
            </Row>
            <div className="form-footer">
            <button type="submit" className="submit-button">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </Page>
  );
};

export default ContactMe;
