import { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import { Typography } from "@mui/material";

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0)

    function proximo() {
        setEtapaAtual(etapaAtual+1)
    }

    function formularioAtual(etapa) {
        switch (etapa) {
            case 0:
                return <DadosUsuario aoEnviar={proximo} />
            case 1:
                return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />
            case 2:
                return <DadosEntrega aoEnviar={aoEnviar} />
            default:
                return <Typography>Erro ao selecionar formulário</Typography>
        }
    }

    return (
        <>
          {formularioAtual(etapaAtual)}    
        </>
    )
}

//<DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
//<DadosUsuario />
//<DadosEntrega />