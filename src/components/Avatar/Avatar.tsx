import React from 'react'
import styles from './Avatar.module.css';

interface AvatarProps {
    src: string;
    hasBorder?: boolean | undefined;
}

export default function Avatar({src, hasBorder = true}: AvatarProps) {
  return (
    <img 
        className={hasBorder ? styles.avatar : styles.avatarWithoutBorder} 
        src={src} alt="Avatar do usuário"
    />
  )
}
