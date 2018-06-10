import React from 'react';
import { Card, Row, Col, Tabs, Tab } from 'react-materialize';

export default class Dashboard extends React.Component{

	render(){
		return(
			<div>
				<Row className="center">
					<h5>Olá, professor!</h5>
				</Row>
				<Row>
					<Tabs className="z-depth-1">
						<Tab title="Dados Gerais" active>
							<Col s={12} m={8}>
								<Card className="large"
									title="Última Avaliação"
								>
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
								</Card>
							</Col>
						</Tab>
						<Tab title="SMA0353"></Tab>
					</Tabs>	
				</Row>
			</div>
		);
	}

}
