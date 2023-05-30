import React, { MouseEvent } from 'react';

import styles from './RoundedButton.module.css';

interface ButtonProps {
  name: string;
  color: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function RoundedButton(props: ButtonProps) {

  return (
    <button className={styles.roundedButton} style={{backgroundColor: props.color}} onClick={props.onClick}>{props.name} </button>
  )
}