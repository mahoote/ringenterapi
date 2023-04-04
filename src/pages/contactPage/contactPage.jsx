import React from "react";
import { PageLayout } from "../../components/containers/pageLayout/pageLayout";
import { ContactInfo } from "../../components/containers/contactPage/contactInfo/contactInfo";
import { ContactForm } from "../../components/containers/contactPage/contactForm/contactForm";

export function ContactPage(props) {
  return (
    <PageLayout className={props.className}>
      <div className={"columns is-centered is-multiline my-2 mb-6"}>
        <ContactInfo className={"column is-4-desktop is-12-tablet"} />
        <ContactForm className={"column is-6-desktop is-12-touch"} />
      </div>
    </PageLayout>
  );
}
