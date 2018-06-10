import React from 'react';
import { BarGraphic, LineGraphic } from './ChartComponent';
import { Button, Card, Row, Col, Tabs, Tab, Input } from 'react-materialize';

export default class Dashboard extends React.Component{

	render(){
		return(
			<div>
				<Row className="center">
					<h5>Olá, professor!</h5>
				</Row>
				<Tabs className="z-depth-1">
					<Tab title="Dados Gerais" active>
						<DadosGerais/>
					</Tab>
					<Tab title="Avisos">
						<Avisos/>
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
	<div>
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
