import { Container, Typography } from '@mui/material';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

import { validarCPF, validarSenha } from './models/cadastro';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ValidacoesCadastro from './contexts/validacoesCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant='h3' component='h1' align='center'>Formulário de cadastro</Typography>
      <ValidacoesCadastro.Provider value={{cpf: validarCPF, senha: validarSenha, nome: validarSenha}}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
