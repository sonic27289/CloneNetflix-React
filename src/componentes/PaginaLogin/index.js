import React, { useState } from 'react';
import Form from '../Formulario';
import TopoPagina from '../TopoPagina';
import '../../App.css';
import '../../App'

export default function SignIn({onLogged}) {

  const [enderecoDeEmail, setEnderecoDeEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div className="telaLogin--backgroundImage">

      <TopoPagina>
      </TopoPagina>
      <Form>
          <Form.Titulo>Entrar</Form.Titulo>
          <Form.Base onSubmit={onLogged}>
            <Form.Input
              placeholder="Email ou número de telefone"
              onChange={(event) => setEnderecoDeEmail(event.value)}
            />
            <Form.Input
              type="password"
              onChange={(event) => setSenha(event.value)}
              autoComplete="off"
              placeholder="Senha"
            />
            <Form.Submit disabled={senha === '' || enderecoDeEmail === ''} type="submit" data-testid="sign-in">
              Entrar
            </Form.Submit>
          </Form.Base>

          <Form.Texto>
             Novo por aqui? Assine agora.
          </Form.Texto>
          <Form.TextoPequeno>
            Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
          </Form.TextoPequeno>
        </Form>
    </div>
  );
};