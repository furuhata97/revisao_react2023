import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { RoundedButton } from '../RoundedButton/RoundedButton';
import styles from './Post.module.css';
import Comment from '../Comment/Comment';
import Avatar from '../Avatar/Avatar';

interface PostProps {
  post: PostType;
};

export interface PostType {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState<string[]>(['Testando comentários']);
  const [comment, setComment] = useState<string>('');
  const navigate = useNavigate();

  const formattedDate = format(post.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});
  const formattedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {locale: ptBR, addSuffix: true})

  const isNewContentDisabled = comment.length === 0;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
    event.target.setCustomValidity('');
  };

  const handleNewCommentInvalid = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  const handleClickPost = (e: MouseEvent<HTMLDivElement>, postId: number) => {
    const { tagName } = e.target as HTMLElement;
    if (tagName === 'TEXTAREA' || tagName === 'BUTTON') {
      return; // Interrompe a execução da ação
    }

    // Executa a ação
    console.log('Ação executada!');
    navigate(`/posts/${postId}`);
  };

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setComments([...comments, comment]);
    setComment('');
  };

  const handleDeleteComment = (commentToDeltete: string) => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment != commentToDeltete;
    });
    console.log(commentsWithoutDeletedOne);
    setComments(commentsWithoutDeletedOne)
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time 
          title={formattedDate}
          dateTime={post.publishedAt.toISOString()}
        >
          {formattedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(item => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === 'link') {
            return <p key={item.content}><a href="#">{item.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          value={comment} 
          onChange={handleChange} 
          placeholder='Deixe um comentário' 
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type='submit' disabled={isNewContentDisabled}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
          {comments.map(comment => {
            return (
                    <Comment 
                      key={comment} 
                      onDeleteComment={handleDeleteComment} 
                      comment={comment}
                    />
                  )
          })}
      </div>
    </article>
  )
}