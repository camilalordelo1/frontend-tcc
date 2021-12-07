import './styles.css'

import { HeaderHome }  from './HeaderHome'
import { NossoConsul } from './NossoConsul';
import { EspecialidadesBar } from './EspecialidadesBar';
import { Footer } from './Footer';

function Home () {
    return(
    <>
    {/* Header */}
    <HeaderHome />

    {/* Nosso consultório */}
    <NossoConsul />

    {/* Especialidade */}
    <EspecialidadesBar />

    { /* Footer */}
    <Footer />
    </>
    )
}

export default Home;