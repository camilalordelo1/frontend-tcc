import './styles.css'
import { Link } from 'react-router-dom'

export const NavItem = (props) => {

    const { text, src, link, color} = props;
    
    return (
        <>
        <Link to={link} className="btn-link"> 
            <div className="nav-item">
                <div className={"circle-item " + color}>
                    <img src={src} alt="" />
                </div>
                <div className="text-item">
                    {text}
                </div>
            </div>
        </Link>
        </>
    )
}