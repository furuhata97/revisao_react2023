import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import styles from './SinglePost.module.css';
import { RoundedButton } from '../components/RoundedButton/RoundedButton';
import api from '../services/api';

type Post = {
  id?: number;
  title?: string;
  body?: string;
  userId?: number;
};

export const SinglePost: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post>({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<Post>(`/posts/${id}`);
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, [id]);

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <h2>Post {post.id}</h2>
        <div className={styles.alignRight}>
          <strong>Autor</strong>
        </div>
        <div className={styles.userHeader}>
          <img className={styles.userImage} src="https://hope.be/wp-content/uploads/2015/05/no-user-image.gif" alt="Usuário sem foto" />
          <div className={styles.userSubtext}>
            <strong>Pessoa de ID {post.userId}</strong>
            <div className={styles.alignRight}>
              <span className={styles.hours}>Publicado há XXh</span>
            </div>
          </div>
        </div>
        <div className={styles.postBody}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
          <RoundedButton color='#00875F' name='Voltar' onClick={handleReturn}/>
        </div>
      </div>
    </div>
  );
}