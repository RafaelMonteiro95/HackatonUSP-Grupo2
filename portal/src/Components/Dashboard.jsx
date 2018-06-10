import React from 'react';
import { BarGraphic, LineGraphic } from './ChartComponent';
import { Button, Card, Collection, CollectionItem, Row, Col, Tabs, Tab, Input, Table, Tag, Chip} from 'react-materialize';

export default class Dashboard extends React.Component{

	render(){
		return(
			<div>
				<Row className="center">
					{/*<h2>Olá, professor!</h2>*/}
				</Row>
				<Tabs className="z-depth-1">
					<Tab title="Dados Gerais" active>
						<DadosGerais/>
					</Tab>
					<Tab title="Avisos">
						<Avisos/>
					</Tab>
					<Tab title="Ranking Geral">
						<Ranking/>
					</Tab>
				</Tabs>	
			</div>
		);
	}

}

const DadosGerais = () => (
	<div>
		<Col s={12} m={8}>
			<Card className="large"
				title="Ultímas Avaliações"
			>
				<BarGraphic/>
			</Card>
		</Col>
		<Col s={12} m={4}>
			<Card className="large"
				title="Informações">
			<p><b>Total de Avaliações:</b> 450</p>
			<p><b>Média de avaliações por aula:</b> 20</p>
			<p><b>Valor médio das avaliações:</b> 3</p>
			<p><b>Palavras-chave dos comentários:</b> <Chip>Aula Lenta</Chip> <Chip>Material Ruim</Chip> <Chip>Fala Baixo</Chip> <Chip>Prova Fácil</Chip></p>
			</Card>
		</Col>
		<Col s={12} m={12}>
			<Card className="large"
				title="Progresso da Disciplina">
				<LineGraphic/>
			</Card>
		</Col>
	</div>
);

const Avisos = () => (
	<div style={{paddingTop: '10px'}}>
		<Col s={12} m={12} l={12} className="center">
			<Row><Col s ={8} m={8} l={8} offset="s4 m4 l4">
				<Input s={6} m={6} l={6} label="Assunto"/>
			</Col></Row>
			<Row><Col s ={8} m={8} l={8} offset="s4 m4 l4">
				<Input s={6} m={6} l={6} label="Destinatário" type="select">
					<option value="0">-</option>
					<option value="BCC 015">BCC 015</option>
					<option value="ICMC">ICMC</option>
					<option value="USP São Carlos">USP São Carlos</option>
				</Input>
			</Col></Row>
			<Row><Col s ={8} m={8} l={8} offset="s4 m4 l4">
				<Input s={6} m={6} l={6} label="Mensagem" type="textarea"/>
			</Col></Row>
			<Row>
				<Button className="amber darken-1">Enviar</Button>
			</Row>
		</Col>
	</div>
);

const Ranking = () => (
 <Collection>
 	<li class="collection-item center"> <h5>Professores Campeões</h5> </li>
    <li class="collection-item avatar">
      <img class='circle' src='https://www.freeiconspng.com/uploads/flat-face-icon-23.png' />
      <span class="title">Claudio Possani</span>
      <p>Instituto de Matemática e Estatística - IME</p> 
      <p>Avaliação média: <b>10</b></p>
      <p>Ranking: <b>1o lugar</b></p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <img class='circle' src='https://www.freeiconspng.com/uploads/flat-face-icon-23.png' />
      <span class="title">Clovis de Barros Filho</span>
      <p>Escola de Comunicação e Artes - ECA</p>
      <p>Avaliação média: <b>9.5</b></p>
      <p>Ranking: <b>2o lugar</b></p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <img class='circle' src='https://www.freeiconspng.com/uploads/flat-face-icon-23.png' />
      <span class="title">Fernando Henrique Cardoso</span>
      <p>Faculdade de Economia e Administração - FEA</p>
      <p>Avaliação média: <b>9.0</b></p>
      <p>Ranking: <b>3o lugar</b></p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li>
    <Table centered='true'>
   <thead>
    <tr>
      <th data-field="id">Professor</th>
      <th data-field="name">Instituto</th>
      <th data-field="price">Pontuação Média</th>
      <th data-field="rank">Ranking</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Keanu Reeves</td>
      <td>Instituto de Ciências Matemáticas e de Computação - ICMC</td>
      <td>8.34</td>
      <td>4o</td>
    </tr>
    <tr>
      <td>George Clooney</td>
      <td>Faculdade de Arquitetura e Urbanismo - FAU</td>
      <td>7.5</td>
      <td>5o</td>
    </tr>
    <tr>
      <td>João das Neves</td>
      <td>Instituto de Física de São Carlos - IFSC</td>
      <td>5.9</td>
      <td>6o</td>
    </tr>
    <tr>
      <td>João das Neves</td>
      <td>Instituto de Física de São Carlos - IFSC</td>
      <td>5.9</td>
      <td>7o</td>
    </tr>
    <tr>
      <td>João das Neves</td>
      <td>Instituto de Física de São Carlos - IFSC</td>
      <td>5.9</td>
      <td>8o</td>
    </tr>
  </tbody>
  </Table>
    </li>
  </Collection>	
);