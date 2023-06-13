import React, { useState } from 'react';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from '../Avatar/Avatar';

interface commentProps {
    comment: string;
    onDeleteComment: (comment: string) => void;
}

export default function Comment({comment, onDeleteComment}: commentProps) {
    const [likeCount, setLikeCount] = useState<number>(0);

    function handleDeleteComment() {
        onDeleteComment(comment);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/furuhata97.png"/>
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.author}>
                        <strong>Gustavo Furuhata</strong>
                        <time title='11 de junho de 2023 às 22:15h' dateTime='2023-06-11 22:15:24'>Cerca de 1h atrás</time>
                    </div>
                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>
                <p>
                   {comment}
                </p>
            </div>
            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
  )
}
