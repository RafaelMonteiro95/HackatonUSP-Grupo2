import React from 'react';
import { BarGraphic, LineGraphic } from './ChartComponent';
import { Button, Card, Collection, CollectionItem, Row, Col, Tabs, Tab, Input } from 'react-materialize';

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
				title="Última Avaliação"
			>
				<BarGraphic/>
			</Card>
		</Col>
		<Col s={12} m={4}>
			<Card className="large"
				title="Dados"
			>
			</Card>
		</Col>
		<Col s={12} m={12}>
			<Card className="large"
				title="Progresso da Disciplina"
			>
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
    <li class="collection-item avatar">
      <i class="material-icons circle">folder</i>
      <span class="title">Professor #1</span>
      <p>Instituto X</p> 
      <p>Avaliação média: 9.8</p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle">folder</i>
      <span class="title">Professor #2</span>
      <p>Instituto Y</p>
      <p>Avaliação média: 9.5</p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle">folder</i>
      <span class="title">Professor #3</span>
      <p>Instituto Z</p>
      <p>Avaliação média: 9.0</p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <span class="title">Professor #4</span>
      <p>Instituto Z</p>
      <p>Avaliação média: 8.7</p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <span class="title">Professor #5</span>
      <p>Instituto A</p>
      <p>Avaliação média: 8.5</p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
  </Collection>	
);