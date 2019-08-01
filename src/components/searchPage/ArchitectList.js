import React, { useState, Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import ArchitectItem from './ArchitectItem';
import SearchInput from './SearchInput';

import dataFilter from '../dataFilter';
import { withI18n } from '@lingui/react';
import { useStaticQuery, graphql } from 'gatsby';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		margin: '20px auto',
		width: '90%'
	},
}));

const ArchitectList = ({ i18n }) => {
	const query = graphql`
       query {
           allContentfulArchitects {
                nodes {
                  birthDate
                  birthPlace
                  description
                  lang
                  name
                  path
                  timeline {
                    timeline
                  }
                  mapData {
                    map
                  }
                  video
                  tmp {
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

	const classes = useStyles();

	const [searchValue, setSearchValue] = useState('');

	const filterName = (items, filterValue) => {
		if (filterValue.lenght === 0) {
			return items
		}
		return items.filter(item => {
			if (
				item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
				item.birthPlace.toLowerCase().includes(filterValue.toLowerCase())
			) {
				return item
			}
		})
	}

	const changeListFilterValue = (value) => {
		setSearchValue(value)
	};

	const renderNameList = filterName(architectDataFiltered.data, searchValue);

	const namesList = renderNameList.map((item, index) => {
		return (
			<ArchitectItem key={index} name={item.name} path={item.path} img={item.tmp.file.url} />
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

export default withI18n()(ArchitectList);
// export default ArchitectList