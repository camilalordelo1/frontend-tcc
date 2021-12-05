import './styles.css'

export const QuadroEspecialidade = (props) => {
    const { titleInfo } = props;
    const { listEspeObj } = props;
    const {descricao} = props;

    const listEspe = listEspeObj.map((listEspeObj) => 
        <li> {listEspeObj} </li>
    );
    return (
        <div className="col-especialidade">
        <hr/>
        <div className="azul-retangulo"> 
            <ul>
                <li className="title-info-espe"> <h3> {titleInfo} </h3> </li>
                <p> {descricao}</p>
                <ul className="info-espe">
                    {listEspe}
                </ul>
            </ul>
        </div>
    </div>
    )
}