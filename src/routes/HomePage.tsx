import React, { useState, useEffect } from 'react';

import { Post } from '../components/Post/Post.tsx'
import { UserCard } from '../components/UserCard/UserCard.tsx';
import api from '../services/api.ts';

import styles from './HomePage.module.css';
import { Sidebar } from '../components/Sidebar/Sidebar.tsx';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export function HomePage() {

  const [dados, setDados] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<Post[]>('/posts');
        setDados(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      {dados.map((item) => (
          <div key={item.id} style={{ marginLeft: 'auto', marginRight: '3rem' }}>
            <Post id={item.id} title={item.title} body={item.body} userId={item.userId} />
          </div>
        ))}
      </main>
    </div>
  )
}
