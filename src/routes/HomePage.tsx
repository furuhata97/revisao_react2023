import React, { useState, useEffect } from 'react';

import { Post, PostType } from '../components/Post/Post.tsx'
import api from '../services/api.ts';

import styles from './HomePage.module.css';
import { Sidebar } from '../components/Sidebar/Sidebar.tsx';

var posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/furuhata97.png',
      name: 'Gustavo Furuhata',
      role: 'Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-06-13 09:16:23')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/furuhata97.png',
      name: 'Gustavo Pitão',
      role: 'Gerente',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-06-13 09:16:23')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/furuhata97.png',
      name: 'Gustavo FFFF',
      role: 'CTO',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-06-13 09:16:23')
  }
]

export function HomePage() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        /*const response = await api.get<Post[]>('/posts');
        setDados(response.data);
        console.log(response.data)*/
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
      {posts.map((item) => (
            <Post 
              key={item.id}
              post={item}
            />
        ))}
      </main>
    </div>
  )
}
