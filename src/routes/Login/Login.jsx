import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const usuarioRef = useRef();
  const senhaRef = useRef();
  const [usuarios, setUsuarios] = useState([]);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const validarLogin = () => {
    const usuarioInput = usuarioRef.current.value;
    const senhaInput = senhaRef.current.value;

    if (!usuarioInput || !senhaInput) {
      setErro('Por favor, preencha todos os campos.');
      return false;
    }

    const usuarioEncontrado = usuarios.find(
      (user) => user.usuario === usuarioInput && user.senha === senhaInput
    );

    if (usuarioEncontrado) {
      return true;
    } else {
      setErro('Nome de usuário e senha incorretos ou inexistentes.');
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');

    if (validarLogin()) {
      const token = Math.random().toString(16).substring(2);
      sessionStorage.setItem('usuario', usuarioRef.current.value);
      sessionStorage.setItem('token', token);
      navigate('/loginsucesso');
    } else {
      usuarioRef.current.value = '';
      senhaRef.current.value = '';
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/usuarios/')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro ao buscar usuários.');
        }
        return res.json();
      })
      .then((data) => {
        setUsuarios(data);
      })
      .catch((error) => {
        setErro(error.message);
      });
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">Faça seu Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Digite seu usuário"
              ref={usuarioRef}
              className="w-full p-3 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Digite sua senha"
              ref={senhaRef}
              className="w-full p-3 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          {erro && <p className="text-sm text-red-500">{erro}</p>}

          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
          >
            Login
          </button>

          <div className="flex flex-col items-center mt-4 space-y-2">
            <Link to="/cadastrar" className="text-sm text-gray-400 hover:text-gray-200">
              Esqueceu sua senha?
            </Link>
            <div className="text-sm text-gray-400">
              Não tem conta?{' '}
              <Link to="/cadastrar" className="text-blue-500 hover:text-blue-400">
                Criar
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
