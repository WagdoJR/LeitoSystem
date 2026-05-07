import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMensagem('');

    try {
      const response = await api.post('/auth/login', {
        email,
        senha
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('usuario', JSON.stringify(response.data.usuario));

      navigate('/dashboard');
    } catch (error) {
      setMensagem(
        error.response?.data?.message || 'Erro ao realizar login.'
      );
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>LeitoSystem</h1>
        <p style={styles.subtitle}>Sistema de gerenciamento de leitos hospitalares</p>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>

        {mensagem && <p style={styles.error}>{mensagem}</p>}

        <div style={styles.info}>
          <p><strong>Usuário teste:</strong> admin@leitosystem.com</p>
          <p><strong>Senha:</strong> 123456</p>
        </div>
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
    background: 'linear-gradient(135deg, #dbeafe, #eff6ff)'
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    background: '#fff',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
  },
  title: {
    textAlign: 'center',
    marginBottom: '8px',
    color: '#1e3a8a'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#555',
    marginBottom: '24px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px'
  },
  button: {
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#2563eb',
    color: '#fff',
    fontSize: '15px',
    cursor: 'pointer'
  },
  error: {
    marginTop: '12px',
    color: 'red',
    textAlign: 'center'
  },
  info: {
    marginTop: '20px',
    fontSize: '13px',
    color: '#444',
    textAlign: 'center'
  }
};

export default Login;