import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import ArchitectItem from './ArchitectItem'
import SearchInput from './SearchInput'

import dataFilter from '../dataFilter';
import { withI18n } from '@lingui/react';
import { useStaticQuery, graphql } from 'gatsby';

const useStyles = makeStyles(theme => ({
	root: {
		width: '90%',
		maxWidth: 1000,
		backgroundColor: theme.palette.background.paper,
		margin: 'auto'
	},
}));

const ArchitectList = ({ i18n }) => {
	const classes = useStyles();

	const query = graphql`
	query {
			allContentfulArchitects {
					 nodes {
						 birthPlace
						 lang
						 name
						 path
						 photo {
							 file {
								 url
							 }
						 }
					 }
				 }
			 }
	 `;

	const architectDataFull = useStaticQuery(query);
	const architectDataFiltered = new dataFilter(architectDataFull.allContentfulArchitects.nodes)
		.filterByField({ lang: i18n._language })
		.unique('name');

	console.log(architectDataFiltered.data);

	const [names] = useState(architectDataFiltered.data);

	const [searchProps, setSearchProps] = useState(['', 'name']);
	const [searchValue, searchBy] = searchProps;
	const filterName = (items, searchValue) => {
		if (searchValue.lenght === 0) {
			return items
		}
		return items.filter(item => {
			if (item[searchBy].toLowerCase().includes(searchValue.toLowerCase())) {
				return item
			}
		})
	}

	const changeListFilterValue = (newSearchProps) => {
		setSearchProps(newSearchProps)
	}

	const renderNameList = filterName(names, searchValue);
	const namesList = renderNameList.map((item, index) => {
		return (
			<ArchitectItem data={item} key={index} />
		)
	})
	return (
		<List className={classes.root}>
			<SearchInput
				changeListFilterValue={changeListFilterValue} />
			{namesList}
		</List>
	)
};

export default withI18n()(ArchitectList);
