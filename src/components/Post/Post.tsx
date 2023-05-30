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
    <div className={styles.post} onClick={(e) => handleClickPost(e, props.id)} >
      <div className={styles.userHeader}>
        <img className={styles.userImage} src="https://hope.be/wp-content/uploads/2015/05/no-user-image.gif" alt="Usuário sem foto" />
        <div className={styles.userSubtext}>
          <strong>Pessoa de ID {props.userId}</strong>
          <div className={styles.info}>
            <span>{props.title}</span>
            <span className={styles.hours}>Publicado há XXh</span>
          </div>
        </div>
      </div>
      <div className={styles.postBody}>
        <p>
          {props.body}
        </p>
        <hr/>
        <strong>Deixe seu comentário</strong>
        <textarea value={text} onChange={handleChange} rows={4} cols={50}></textarea>
        <RoundedButton color='#00875F' name='Publicar' onClick={handleCommentSubmit}/>
      </div>
    </div>
    
  )
}