import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';
const currentDate = format(new Date(), 'EEEEEE, d MMMM',{
    locale: ptBr
})

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <img src='/logo.svg' alt='logo Podcastr'/>
            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>
        </header>
    )
}