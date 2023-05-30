import React, { MouseEvent } from 'react';

import styles from './UserCard.module.css';
import { RoundedButton } from '../RoundedButton/RoundedButton';
import { useNavigate } from 'react-router-dom';

export const UserCard: React.FC = () => {
  const navigate = useNavigate();

  const handleclickRegister = () => {
    navigate(`/posts/create`);
  };

  return (
    <div className={styles.userCard}>
      <p>Deseja cadastrar um novo post?</p>
      <RoundedButton name='Cadastrar' color='#00875F' onClick={handleclickRegister} />
    </div>
  );
}