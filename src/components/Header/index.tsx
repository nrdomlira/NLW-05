import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';
import Link from 'next/link';

import styles from './styles.module.scss';
const currentDate = format(new Date(), 'EEEEEE, d MMMM',{
    locale: ptBr
})

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <Link href='/'>
            <img src='/logo.svg' alt='logo Podcastr'/>
            </Link>
            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>
        </header>
    )
}