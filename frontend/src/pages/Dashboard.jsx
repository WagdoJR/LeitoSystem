import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Dashboard() {
  const navigate = useNavigate();

  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(true);

  const [filtroSelecionado, setFiltroSelecionado] = useState(null);
  const [leitos, setLeitos] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/');
      return;
    }

    carregarDashboard();
  }, []);

  const carregarDashboard = async () => {
    try {
      setCarregando(true);
      setErro('');

      const response = await api.get('/beds/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setDados(response.data);
    } catch (error) {
      setErro('Erro ao carregar dashboard');

      if (error.response?.status === 401) {
        handleLogout();
      }
    } finally {
      setCarregando(false);
    }
  };

  const carregarLeitos = async (status) => {
    try {
      const response = await api.get('/beds', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      let filtrados = response.data;

      if (status) {
        filtrados = filtrados.filter((b) => b.status === status);
      }

      setLeitos(filtrados);
      setFiltroSelecionado(status);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    navigate('/');
  };

  if (carregando) {
    return <p style={styles.loading}>Carregando dashboard...</p>;
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Dashboard</h1>

        <div style={styles.actions}>
          <button onClick={() => navigate('/beds')} style={styles.navButton}>
            Leitos
          </button>

          <button onClick={() => navigate('/patients')} style={styles.navButton}>
            Pacientes
          </button>

          <button onClick={handleLogout} style={styles.logoutButton}>
            Sair
          </button>
        </div>
      </header>

      {erro && <p style={styles.error}>{erro}</p>}

      {dados && (
        <div style={styles.grid}>
          <Card
            title="Total de Leitos"
            value={dados.total}
            onClick={() => carregarLeitos(null)}
            ativo={filtroSelecionado === null}
          />

          <Card
            title="Disponíveis"
            value={dados.disponiveis}
            onClick={() => carregarLeitos('disponivel')}
            ativo={filtroSelecionado === 'disponivel'}
          />

          <Card
            title="Ocupados"
            value={dados.ocupados}
            onClick={() => carregarLeitos('ocupado')}
            ativo={filtroSelecionado === 'ocupado'}
          />

          <Card
            title="Manutenção"
            value={dados.manutencao}
            onClick={() => carregarLeitos('manutencao')}
            ativo={filtroSelecionado === 'manutencao'}
          />

          <Card
            title="Taxa de Ocupação"
            value={`${dados.taxaOcupacao}%`}
          />
        </div>
      )}

      {/* LISTA DE LEITOS */}
      {filtroSelecionado !== null && (
        <div style={styles.listaContainer}>
          <h2 style={styles.subTitle}>
            Leitos {filtroSelecionado}
          </h2>

          {leitos.length === 0 ? (
            <p>Nenhum leito encontrado.</p>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Número</th>
                  <th style={styles.th}>Setor</th>
                  <th style={styles.th}>Tipo</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {leitos.map((bed) => (
                  <tr key={bed.id}>
                    <td style={styles.td}>{bed.numero}</td>
                    <td style={styles.td}>{bed.setor}</td>
                    <td style={styles.td}>{bed.tipo}</td>
                    <td style={styles.td}>{bed.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

function Card({ title, value, onClick, ativo }) {
  return (
    <div
      style={{
        ...styles.card,
        border: ativo ? '2px solid #2563eb' : 'none',
        cursor: onClick ? 'pointer' : 'default'
      }}
      onClick={onClick}
    >
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardValue}>{value}</p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    padding: '24px'
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    flexWrap: 'wrap',
    gap: '12px'
  },

  title: {
    margin: 0
  },

  actions: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  },

  navButton: {
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    padding: '10px 14px',
    borderRadius: '8px',
    cursor: 'pointer'
  },

  logoutButton: {
    backgroundColor: '#dc2626',
    color: '#fff',
    border: 'none',
    padding: '10px 14px',
    borderRadius: '8px',
    cursor: 'pointer'
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px'
  },

  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    textAlign: 'center'
  },

  cardTitle: {
    margin: 0,
    marginBottom: '8px',
    color: '#334155'
  },

  cardValue: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#0f172a'
  },

  listaContainer: {
    marginTop: '32px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
  },

  subTitle: {
    marginBottom: '16px'
  },

  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },

  th: {
    textAlign: 'left',
    padding: '10px',
    borderBottom: '1px solid #ccc'
  },

  td: {
    padding: '10px',
    borderBottom: '1px solid #eee'
  },

  error: {
    color: '#b91c1c',
    marginBottom: '12px'
  },

  loading: {
    padding: '24px'
  }
};

export default Dashboard;