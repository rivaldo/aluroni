import styles from './Item.module.scss'
import cardapio from '../itens.json'
import classNames from 'classnames';


type Props = typeof cardapio[0]

export default function Item(props : Props){

    const {title, description, category, size, serving , price, photo} = props;

    return (
        <div className={styles.Item}>
            <div className={styles.Item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className = { styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>
                       {description} 
                    </p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classNames({
                        [styles.item__tipo]:true,
                        [styles[`item__tipo__${category.label.toLowerCase()}`]]:true,
                    })}
                >
                        {category.label}
                    </div>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__porcao}>
                        {size}g
                    </div>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__qtdpessoas}>
                        Serve {serving} Pessoa{serving === 1 ? '':'s'}
                    </div>
                </div>
                <div className={styles.item__valor}>
                    <div className={styles.item__tipo}>
                        R$ {price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}