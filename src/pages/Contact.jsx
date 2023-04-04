import React from "react";
import { PageLayout } from "../components/containers/pageLayout/pageLayout";
import { ContactInfo } from "../components/containers/contactPage/contactInfo/contactInfo";
import { ContactForm } from "../components/containers/contactPage/contactForm/contactForm";
import data from "../assets/data.json";
import { Helmet } from "react-helmet";

function Contact(props) {
  return (
    <PageLayout className={props.className}>
      <Helmet>
        <title>Kontakt - {data.websiteName}</title>
      </Helmet>
      <div className={"columns is-centered is-multiline my-2 mb-6"}>
        <ContactInfo className={"column is-4-desktop is-12-tablet"} />
        <ContactForm className={"column is-6-desktop is-12-touch"} />
      </div>
    </PageLayout>
  );
}

export default Contact;
