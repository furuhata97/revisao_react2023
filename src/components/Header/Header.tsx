import styles from './Header.module.css';

import igniteLogo from '../../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo" />
    </header>
    
  )
}

// import styles from './Header.module.css';

// export function Header() {
//   return (
//     <div className={styles.header}>
//       <div className={styles.title}>Teste Solumobi</div>
//       <div className={styles.buttons}>
//         <button className={styles.button}>Botão 1</button>
//         <button className={styles.button}>Botão 2</button>
//         <button className={styles.button}>Botão 3</button>
//       </div>
//     </div>
//   );
// }
