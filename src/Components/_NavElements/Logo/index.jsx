import { Link } from 'react-router-dom'

import './styles.css'

export const Logo = () => {
	return (
		<Link to="/">
			<div className="logo">
				<h3> Consultório de Fisioterapia</h3>
				<h1> Reabilitando Vidas </h1>
			</div>
		</Link>
	)
}

