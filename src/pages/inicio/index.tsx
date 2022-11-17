
import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from '../../styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';


export default function Inicio(){
	let pratosRecomendados = [...cardapio];
	pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);

	return (
		<section>
			<h3 className={stylesTema.titulo}>
				Recomendações da Cozinha
			</h3>
			<div className={styles.recomendado}>
				{
					pratosRecomendados.map(item => (
						<div key={item.id} className={styles.recomendado}>
							<div className={styles.recomendado__imagem}>
								<img src={item.photo} alt={item.title} />
							</div>
							<div>
								<button className={styles.recomendado__botao}>
									ver mais
								</button>
							</div>
						</div>
					))
				}
			</div>
			<h3 className='stylesTema.titulo'> Nossa casa </h3>
			<div className={styles.nossaCasa}>
				<img src={nossaCasa} alt="Casa do Aluroni" />
				<div className={styles.nossaCasa__endereco}>
					Rua Vergueiro, 385 <br /><br /> Vila Marina - SP
				</div>
			</div>
		</section>
	);
}