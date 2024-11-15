import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cadastrar = () => {
  let { id } = useParams();
  const [usuarios, setUsuarios] = useState({
    id: '',
    usuario: '',
    senha: '',
  });

  const navigate = useNavigate();
  const metodo = id ? 'put' : 'post';

  // Função para lidar com mudanças nos inputs
  const handleChange = (e) => {
    setUsuarios({ ...usuarios, [e.target.name]: e.target.value });
  };

  // Função para envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/usuarios/${id ? id : ''}`, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuarios),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao enviar os dados.');
        }
        return response.json();
      })
      .then(() => {
        sessionStorage.setItem('usuario', usuarios.usuario);
        navigate('/login', { replace: true });
      })
      .catch((error) => {
        console.error('Erro ao cadastrar:', error);
      });
  };

  // Função para logout
  const handleLogout = () => {
    sessionStorage.removeItem('usuario');
    navigate('/login', { replace: true });
  };

  // Hook para carregar dados do usuário se o ID estiver presente
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/usuarios/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUsuarios({ ...data, id });
        })
        .catch((error) => console.error('Erro ao buscar dados do usuário:', error));
    }
  }, [id]);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">
          {id ? 'Editar Usuário' : 'Cadastrar Usuário'}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="usuario"
              placeholder="Digite seu Usuário"
              value={usuarios.usuario}
              onChange={handleChange}
              className="w-full p-3 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              value={usuarios.senha}
              onChange={handleChange}
              className="w-full p-3 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
          >
            {id ? 'Atualizar' : 'Cadastrar'}
          </button>

          <button
            type="button"
            className="w-full p-3 text-white bg-red-600 rounded hover:bg-red-700 transition-colors"
            onClick={handleLogout}
          >
            Logout
          </button>

          <div className="flex justify-center mt-4">
            <Link to="/login" className="text-sm text-gray-400 hover:text-gray-200">
              Voltar para Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Cadastrar;
