import './styles.css'

import { HeaderHome }  from './HeaderHome'
import { NossoConsul } from './NossoConsul';
import { Especialidades } from './Especialidades';
import { Footer } from './Footer';

function Home () {
    return(
    <>
    {/* Header */}
    <HeaderHome />

    {/* Nosso consultório */}
    <NossoConsul />

    {/* Especialidade */}
    <Especialidades />

    { /* Footer */}
    <Footer />
    </>
    )
}

export default Home;