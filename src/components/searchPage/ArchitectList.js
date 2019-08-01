import React, { useState, Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import ArchitectItem from './ArchitectItem';
import SearchInput from './SearchInput';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		margin: '20px auto',
		width: '90%'
	},
}));

export default function ArchitectList() {
	const classes = useStyles();
	const [names] = useState([
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
		if (filterValue.lenght === 0) {
			return items
		}
		return items.filter(item => {
			if (item.toLowerCase().includes(filterValue.toLowerCase())) {
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
		<Fragment>
			<SearchInput changeListFilterValue={changeListFilterValue} />
			<List className={classes.root}>
				{namesList}
			</List>
		</Fragment>
	)
};