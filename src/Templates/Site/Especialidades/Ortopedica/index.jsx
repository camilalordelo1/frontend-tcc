import './styles.css'

import { HeaderSemFoto } from '../../../../Components/HeaderSemFoto'
import { QuadroEspecialidade } from '../QuadroEspecialidade'

export const Ortopedica = () => {
    const quadroObj = [
        {
            title: "Coluna",
            subs: [
            "Cervicalgias / Cervicobraquialgias", 
            "Lombalgias / Lombociatalgias",
            "Inflamação do nervo ciático",
            "Escoliose",
            "Hérnia de disco",
            "Bico de papagaio",
            "Artrose",
            "Fibromialgia"
            ]
        },
        {
            title: "Ombro",
            subs: [
                "Lesão de manguito rotador",
                "Tendinopatias de Supra Espinhal",
                "Bursite",
                "Derrame Articular"
            ]
        },
        {
            title: "Mão",
            subs: [
                "Síndrome do Túnel do Carpo",
                "Tendinopatias",
                "Tenorrafias"
            ]
        },
        {
            title: "Quadril",
            subs: [
                "Fraturas de fêmur",
                "Artrose",
                "Bursite"
            ]
        },
        {
            title: "Joelho",
            subs: [
                "Condropatias",
                "Condromalácia",
                "Lesão de Ligamento Cruzado Anterior (LCA)",
                "Lesão de Ligamento Cruzado Posterior (LCP)",
                "Lesão de Ligamento Colateral Medial (LCM)",
                "Lesão de Ligamento Colateral Lateral (LCL)",
                "Meniscos",
                "Cirurgias em geral",
                "Pata de ganso",
                "Derrame articular"
            ]
        },
        {
            title: "Tornozelo e Pé",
            subs: [
                "Rupturas de Tendão de Aquiles",
                "Fraturas em geral",
                "Esporão de calcâneo",
                "Fasceite Plantar",
                "Tendinopatia do Extensor de Hálux",
                "Tendinopatia do Flexores de Dedos"
            ]
        },
    ]

    const conteudoOrtopedica = (        
        <div className="especialidade">
            <h1> ESPECIALIDADES ORTOPÉDICAS </h1>
            <div className="container-especialidades">
                {quadroObj.map(quadroObj => (
                <QuadroEspecialidade titleInfo={quadroObj.title} listEspeObj={quadroObj.subs} />
                ))}

            </div>

        </div>)

    return(
        <div className="div-contato">
            <HeaderSemFoto conteudoHeader={conteudoOrtopedica} />
        </div>
    )
}