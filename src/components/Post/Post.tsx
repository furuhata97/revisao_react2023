import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoundedButton } from '../RoundedButton/RoundedButton';
import styles from './Post.module.css';

type PostProps = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export function Post(props: PostProps) {
  const [text, setText] = useState<string>('');
  const navigate = useNavigate();


  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleClickPost = (e: MouseEvent<HTMLDivElement>, postId: number) => {
    const { tagName } = e.target as HTMLElement;
    if (tagName === 'TEXTAREA' || tagName === 'BUTTON') {
      return; // Interrompe a execução da ação
    }

    // Executa a ação
    console.log('Ação executada!');
    navigate(`/posts/${postId}`);
  };

  const handleCommentSubmit = () => {
    // Enviar o comentário para a API
    if (text.length === 0) {
      console.log('Nenhum comentário');
    } else {
      console.log(`Comentário ${text}`);
    }
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/22104796?v=4" alt="" />
          <div className={styles.authorInfo}>
            <strong>Gustavo Furuhata</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='11 de junho de 2023 às 22:15h' dateTime='2023-06-11 22:15:24'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p> 

          <p><a href="">👉{' '}jane.design/doctorcare</a></p> 

          <p>
            <a href="">#novoprojeto</a>{' '}
            <a href="">#nlw</a>{' '}
            <a href="">#rocketseat</a>
            </p> 
        </p>
      </div>
    </article>
  )
}