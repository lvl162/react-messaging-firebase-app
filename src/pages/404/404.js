import { Link } from 'react-router-dom';
import './404.css';
export default function Custom404() {
  return (
    <div className='Notfound'>
      <h1>404 - That page does not seem to exist...</h1>
      <iframe
        title='cc'
        src='https://giphy.com/embed/l2JehQ2GitHGdVG9y'
        width='480'
        height='362'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <Link to='/'>
        <button className='btn btn-primary'>Go home</button>
      </Link>
    </div>
  );
}
