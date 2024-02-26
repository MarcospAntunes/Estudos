import { useState } from 'react';
import { useRouter } from 'next/router';
import { authService } from '../src/services/auth/authService';

export default function HomeScreen() {
  const router = useRouter();
  const [valor, setValor] = useState({
    usuario: 'marcos',
    senha: 'safepassword'
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setValor((current) => {
      return {
        ...current,
        [name]: value,
      };
    })
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        authService.login({
          username: valor.usuario,
          password: valor.senha
        })
        
          .then(() => {
            router.push('/auth-page-ssr')
          })
          .catch((err) => {
            console.log(err)
            alert('Usuário ou a senha estão inválidos')
          })
        }}>
        <input
          placeholder="Usuário" 
          name="usuario"
          defaultValue="omariosouto"
          value={valor.usuario}
          onChange={e => handleChange(e)}
        />
        <input
          placeholder="Senha" 
          name="senha" 
          type="password"
          defaultValue="safepassword"
          value={valor.senha}
          onChange={e => handleChange(e)}
        />
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
