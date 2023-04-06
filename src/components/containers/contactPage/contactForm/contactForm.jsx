import { TextStyled } from "../../../text/text.style";
import data from "../../../../assets/data.json";
import {
  desktopBig,
  desktopSmall,
  mobileBig,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";
import React, { useRef, useState } from "react";
import { CenterStyled } from "../../center/center.style";
import { TextInput } from "../../../input/text/textInput";
import {
  ContactFormContentStyled,
  FormInputsStyled,
} from "./contactForm.style";
import { TextAreaInput } from "../../../input/textarea/textAreaInput";
import { ButtonStyled } from "../../../button/button.style";
import { Loader } from "../../loader/loader";
import * as emailjs from "@emailjs/browser";

function Heading() {
  return (
    <div className={"has-text-centered"}>
      <TextStyled
        text={data.contactPage.contactForm.line1.text}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
      />
      <TextStyled
        className={"my-4"}
        text={data.contactPage.contactForm.line2.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
    </div>
  );
}

function FormInput(props) {
  const required = props.value.required;
  const requiredString = required ? " *" : "";
  const sizeString = `is-${props.value.size}` || "is-12";

  const type = props.value.type;

  if (type === "textarea") {
    return (
      <TextAreaInput
        className={" column " + sizeString}
        required={required}
        placeholder={props.value.text + requiredString}
        name={props.value.name}
      />
    );
  }

  return (
    <TextInput
      className={" column " + sizeString}
      type={type}
      required={required}
      placeholder={props.value.text + requiredString}
      name={props.value.name}
    />
  );
}

function FormInputs(props) {
  const { setMessageSent, setErrorSending, setSendLoading } = props;

  const formValues = data.contactPage.contactForm.formValues;

  const formRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    setSendLoading(true);
    setMessageSent(false);
    setErrorSending(false);

    emailjs
      .sendForm(
        "service_tlzgovp",
        "template_cqz1n4t",
        formRef.current,
        "qPC4UbG5RGcXmMl8v"
      )
      .then(
        function () {
          setSendLoading(false);
          setMessageSent(true);
        },
        function (error) {
          console.log("SEND FAILED...", error);

          setSendLoading(false);
          setErrorSending(true);
        }
      );
  }

  return (
    <form
      ref={formRef}
      className={
        props.className + " columns is-centered is-multiline has-text-centered "
      }
      onSubmit={handleSubmit}
    >
      {formValues.map((value, i) => (
        <FormInput key={i} value={value} />
      ))}
      <ButtonStyled
        className={"py-4 px-6"}
        text={"Send"}
        borderWidth={"2.2px"}
        textSize={3}
        textSizeTouch={5}
      />
    </form>
  );
}

function ContactFormContent(props) {
  const [messageSent, setMessageSent] = useState(false);
  const [errorSending, setErrorSending] = useState(false);
  const [sendLoading, setSendLoading] = useState(false);

  const FormLayout = () => {
    return (
      <>
        <Heading />
        <FormInputsStyled
          setMessageSent={setMessageSent}
          setErrorSending={setErrorSending}
          setSendLoading={setSendLoading}
        />
      </>
    );
  };

  return (
    <Loader
      content={
        <CenterStyled
          className={props.className}
          content={
            <div className={"my-6"}>
              {errorSending ? (
                <>
                  <div>Error</div>
                  <FormLayout />
                </>
              ) : messageSent && !sendLoading ? (
                <div>Yes it worked</div>
              ) : !messageSent && sendLoading ? (
                <div>Loading...</div>
              ) : (
                <FormLayout />
              )}
            </div>
          }
        />
      }
    />
  );
}

function ContactForm(props) {
  return (
    <div className={props.className}>
      <ContactFormContentStyled />
    </div>
  );
}

export { ContactForm, ContactFormContent, FormInputs };
