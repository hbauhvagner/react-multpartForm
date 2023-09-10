import { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0)
    const [dadosColetados, setDadosColetados] = useState({})

    useEffect(() => {
        console.log(dadosColetados)
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={coletarDados} />
    ]

    function coletarDados(dados) {
        setDadosColetados({...dadosColetados, ...dados})
        proximo()
    }

    function proximo() {
        setEtapaAtual(etapaAtual+1)
    }

    return (
        <>
          {formularios[etapaAtual]}    
        </>
    )
}