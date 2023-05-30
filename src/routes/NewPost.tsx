import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './NewPost.module.css';
import api from '../services/api';

interface Post {
  title: string;
  body: string;
}

export const NewPost: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await api.post<Post>('/posts', {
        title,
        body,
        userId: 1,
      });
      console.log(response.data); // Trate a resposta da API conforme necessário
      // Redirecione para a página de visualização do novo post ou exiba uma mensagem de sucesso
      navigate('/');
      toast.success('Post cadastrado com sucesso!');
    } catch (error) {
      console.error(error);
      // Exiba uma mensagem de erro ao usuário
    }
  };

  return (
    <div className={styles.registerForm}>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Conteúdo"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </form>
    </div>
  );
}