import styles from './Item.module.scss';
import { Prato } from 'types/Prato';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router';




export default function Item(props : Prato){

	const {id, title, description, photo} = props;
	const navigate = useNavigate();

	return (
		<div className={styles.Item} onClick={() => navigate(`/prato/${id}`)}>
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
				<TagsPrato {...props} />
			</div>
		</div>
	);
}