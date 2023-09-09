import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

export default function FormularioCadastro({ aoEnviar, validarCPF }) {

    return (
        <>
            <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
            <DadosUsuario />
        </>
    )
}