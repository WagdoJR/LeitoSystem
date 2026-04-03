import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Dashboard() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/');
      return;
    }

    const buscarPerfil = async () => {
      try {
        const response = await api.get('/auth/perfil', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUsuario(response.data);
      } catch (error) {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        navigate('/');
      }
    };

    buscarPerfil();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Bem-vindo ao LeitoSystem</h1>
        {usuario && (
          <>
            <p><strong>Nome:</strong> {usuario.nome}</p>
            <p><strong>E-mail:</strong> {usuario.email}</p>
          </>
        )}

        <button onClick={handleLogout} style={styles.button}>
          Sair
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f8fafc'
  },
  card: {
    background: '#fff',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  button: {
    marginTop: '20px',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#dc2626',
    color: '#fff',
    cursor: 'pointer'
  }
};

export default Dashboard;