import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <button onClick={logout}>Logout</button>
          {user.role === 'admin' && <Link to="/admin">Admin</Link>}
          {user.role === 'editor' && <Link to="/editor">Editor</Link>}
          {user.role === 'author' && <Link to="/author">Author</Link>}
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
