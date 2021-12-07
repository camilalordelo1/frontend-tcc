import { HeaderSemFoto } from "../../../../Components/HeaderSemFoto"
import { QuadroEspecialidade } from "../QuadroEspecialidade"
import "./styles.css"

export const PrePosOperatorio = () => {
    const quadroObj = [
        {
            title: "PRÉ OPERATÓRIO VISANDO:",
            descricao: "",
            subs: [ 
                "Ganho de Amplitude de Movimento",
                "Flexibilidade e Mobilidade",
                "Melhora da força muscular"
            ] 
        },
        {
            title: "PÓS OPERATÓRIO",
            descricao: "Melhora da aderência cicatricial, recuperação da força, mobilidade, flexibilidade e alívio da dor. Entre elas, estão as cirurgias de artroscopias, artroplastias, terronafias de:",
            subs: [ 
                "Coluna",
                "Ombro",
                "Mão",
                "Quadril",
                "Joelho",
                "Tornozelo",
                "Pé"
            ] 
        }
    ]
    const conteudoPrePos = (
        <div className="especialidade">
            <h1> ESPECIALIDADES PRÉ E PÓS OPERATÓRIO </h1>
            <div className="container-especialidades">
                {quadroObj.map(quadroObj => (
                <QuadroEspecialidade titleInfo={quadroObj.title} descricao={quadroObj.descricao} listEspeObj={quadroObj.subs} />
                ))}
            </div>
        </div>
    )
    return(
        <div className="div-contato">
        <HeaderSemFoto conteudoHeader={conteudoPrePos} />
        </div>
    )
}