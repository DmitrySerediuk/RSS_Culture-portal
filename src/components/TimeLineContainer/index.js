import React from "react";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default function TimeLineContainer(props) {
	// const { biography } = props;
	  
  // test data
	const biography = [
		{
			dateText: "1901 - 1906",
			text: "Блестяще окончив в 1901 году местную гимназию, поступил на архитектурное отделение Одесского художественного училища, которое окончил в 1906 году."
		},
		{
			dateText: "1907 - 1914",
			text: "В 1907 году переехал в Санкт-Петербург, где успешно выдержал экзамены в Высшее художественное училище при Императорской академии художеств на архитектурный факультет. Отучился семь лет в Санкт-Петербурге (1907—1914)."
		},
		{
			dateText: "1923",
			text: "В 1923 году архитектурный проект Лангбарда, в числе сорока семи работ других авторов, участвовал в конкурсе проектов Дворца труда в Москве — главного общественного здания СССР."
		},
		{
			dateText:"1929",
			text: "В 1929 году выиграл всесоюзный конкурс на лучший проект Дома правительства Белорусской ССР."
		},
	];

return (
	<Container maxWidth="md">
		<Timeline lineColor={'#3C65BE'}>
			{
				biography.map((item, index) => (
					<TimelineItem
						key={index}
						dateText={item.dateText}
						style={{ color: '#e86971' }}
						dateInnerStyle={{ background: '#3C65BE' }}
					>
						<Typography variant='h6'>{item.dateText}</Typography>
						<Typography align='justify' variant='subtitle1'>{item.text}</Typography>
					</TimelineItem>
				))
			}
		</Timeline>
	</Container>
);
}
