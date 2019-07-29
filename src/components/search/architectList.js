import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import ArchitectItem from './ArchitectItem';
import SearchInput from './SearchInput';

const useStyles = makeStyles(theme => ({
	root: {
		// width: '90%',
		// maxWidth: 1000,
		backgroundColor: theme.palette.background.paper,
		margin: '20px 0'
	},
}));

export default function ArchitectList() {
	const classes = useStyles();
	const [names, setNames] = useState([
			'Иван Ургант',
			'Гарик Варламов',
			'Билл Мюррей',
			'Милл Бюррей',
			'Серега',
			'Васёк'
		]
	);
	
	const [searchValue, setSearchValue] = useState('');

	const filterName = (items, filterValue) => {
		if(filterValue.lenght === 0){
			return items
		}
		return items.filter(item=>{
			if(item.toLowerCase().includes(filterValue.toLowerCase())){
				return item
			}
		})
	}

	const changeListFilterValue = (value) => {
		setSearchValue(value)
	}

	const renderNameList = filterName(names, searchValue);
	const namesList = renderNameList.map((item, index) => {
		return (
			<ArchitectItem key={index} name={item} />
		)
	})

	return (
		<List className={classes.root}>
			<SearchInput 
				changeListFilterValue={changeListFilterValue}/>
			{namesList}
		</List>
	)
};
