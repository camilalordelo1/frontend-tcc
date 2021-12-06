import './styles.css'

import { HeaderSemFoto } from '../../../../Components/HeaderSemFoto'
import { QuadroEspecialidade } from '../QuadroEspecialidade'

export const Neurologia = () => {
    const quadroObj = [
        {
            title: "FISIOTERAPIA NEUROLÓGICA ADULTO",
            subs: [
                "AVC",
                "Alzheimer",
                "Parkinson",
                "Traumatismo Crânio Encefálico (TCE)",
                "Esclerose Amiotrófica",
                "Fibromialgia"
            ]
        },
        {
            title: "FISIOTERAPIA NEUROLÓGICA INFANTIL",
            subs: [
                "Síndrome de Down",
                "Microcefalia",
                "Hidrocefalia",
                "Síndrome de Cornélia de Lange",
                "Distrofia Muscular de Duchenne"
            ]
        }
    ]
    const conteudoNeurologica =(
        <div className="especialidade">
        <h1> FISIOTERAPIA NEUROLÓGICA ADULTO E INFANTIL </h1>
        <div className="container-especialidades">
            {quadroObj.map(quadroObj => (
            <QuadroEspecialidade titleInfo={quadroObj.title} listEspeObj={quadroObj.subs} />
            ))}

        </div>
        </div>
    )
    
    return (
        <div>
            <HeaderSemFoto conteudoHeader={conteudoNeurologica}/>
        </div>
    )
}