import styles from './Footer.module.css'

const anoDeCriacao = 2024

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h3>Escreva sobre o que você tem interesse!</h3>
            <p>Mini Blog &copy; {anoDeCriacao}</p>
        </footer>
    )
}

export default Footer