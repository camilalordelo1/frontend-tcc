import { HeaderSemFoto } from "../../../../Components/HeaderSemFoto"
import { QuadroEspecialidade } from "../QuadroEspecialidade"
import "./styles.css"

export const Tratamentos = () => {
    const quadroObj = [
        {
            title: "TRATAMENTOS",
            descricao: "Após avaliação específica, é feito o tratamento de acordo com cada patologia e limitação funcional de cada paciente. Como:",
            subs: [ 
                "Drenagem Linfática",
                "Liberação Miofascial",
                "Massagem Terapêutica",
                "Terapias Manuais (Tração, Deslizamento, Oscilação)",
                "Laser de baixa potência",
                "Ultrassom Terapêutico",
                "Therablaster",
                "Exercícios específicos para cada paciente",
                "Entre outros"
            ] 
        }
    ]
    const conteudoTratamentos = (
        <div className="especialidade">
            <h1> TRATAMENTOS </h1>
            <div className="container-especialidades">
                {quadroObj.map(quadroObj => (
                <QuadroEspecialidade titleInfo={quadroObj.title} descricao={quadroObj.descricao} listEspeObj={quadroObj.subs} />
                ))}
            </div>
        </div>
    )
    return(
        <div>
        <HeaderSemFoto conteudoHeader={conteudoTratamentos} />
        </div>
    )
}