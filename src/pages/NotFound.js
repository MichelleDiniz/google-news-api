import Alert from '../images/alert-error.svg';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <img src={Alert} className="error-404-imate" alt="Página não encontrada" />
    <h2 className="title">Página não encontrada</h2>
    <p>Desculpe, não tem nada aqui. Que tal voltar à <Link className="link" to="/">página de notícias?</Link></p>

  </div>
)

export default NotFound;
