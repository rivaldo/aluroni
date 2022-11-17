import classNames from 'classnames';
import { Prato } from 'types/Prato';
import styles from './TagsPrato.module.scss';

export default function TagsPrato({ category, size, serving, price}:Prato){
	return (
		<>
			<div className={styles.tags__tags}>
				<div className={classNames({
					[styles.tags__tipo]: true,
					[styles[`tags__tipo__${category.label.toLowerCase()}`]]: true,
				})}
				>
					{category.label}
				</div>
			</div><div className={styles.tags__tags}>
				<div className={styles.tags__porcao}>
					{size}g
				</div>
			</div><div className={styles.tags__tags}>
				<div className={styles.tags__qtdpessoas}>
						Serve {serving} Pessoa{serving === 1 ? '' : 's'}
				</div>
			</div><div className={styles.tags__valor}>
				<div className={styles.tags__tipo}>
						R$ {price.toFixed(2)}
				</div>
			</div>
		</>
	);
}