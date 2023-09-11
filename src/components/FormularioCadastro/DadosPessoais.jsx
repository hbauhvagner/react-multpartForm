import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";

export default function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf: {valido: true, texto: ''}, nome: { valido: true, texto: "" }});

    const validacoes = useContext(ValidacoesCadastro)

    function validarCampos(event) {
        const { name, value } = event.target
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value)
        
        setErros(novoEstado)
    }

    function possoEnviar() {
        for(let campo in erros) {
            if(!erros[campo].valido) {
                return false
            }
        }

        return true
    }

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
            }
        }}>
            <TextField 
                value={nome}
                onChange={event => {
                    setNome(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.nome.texto }
                id="nome" 
                label="Nome" 
                name="nome"
                margin="normal" 
                fullWidth 
            />

            <TextField 
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome" 
                label="Sobrenome" 
                name="sobrenome"
                margin="normal" 
                fullWidth 
            />

            <TextField 
                value={cpf}
                onChange={event => {
                    setCpf(event.target.value);
                }}

                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf" 
                name="cpf"
                label="CPF" 
                margin="normal" 
                fullWidth 
            />

            <FormControlLabel 
                label="Promoções" 
                control={<Switch
                    checked={promocoes}
                    onChange={event => {
                    setPromocoes(event.target.checked);
                }} name="promoções" />} 
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch
                    checked={novidades}
                    onChange={event => {
                    setNovidades(event.target.checked);
                }} name="novidades" />}
            />

            <Button 
                type="submit"
                variant="contained"
                color="primary"
            >
                Próximo
            </Button>
        </form>
    )
}