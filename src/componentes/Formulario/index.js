import React from 'react';
import { Container, Base, Titulo, Texto, TextoPequeno, Input, Submit } from './Forms';

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Titulo = function FormTitulo({ children, ...restProps }) {
  return <Titulo {...restProps}>{children}</Titulo>;
};

Form.Texto = function FormTexto({ children, ...restProps }) {
  return <Texto {...restProps}>{children}</Texto>;
};

Form.TextoPequeno = function FormTextPequeno({ children, ...restProps }) {
  return <TextoPequeno {...restProps}>{children}</TextoPequeno>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};