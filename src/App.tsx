import { Home, Todos } from './pages';
import { Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <header className='mb-5'>
        <Link className='mr-5' to='/'>
          Home
        </Link>
        <Link className='mr-5' to='/todos'>
          Todos
        </Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='todos' element={<Todos />} />
      </Routes>
    </>
  );
};
