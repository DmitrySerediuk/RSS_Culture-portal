import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@wapps/gatsby-plugin-lingui';

const useStyles = makeStyles(theme => ({
    root: {
        textDecoration: 'none'
    },
}));

export default function ArchitectItem({ data }) {
    const { name, birthPlace, photo, path } = data;

    const classes = useStyles();

    return (
        <Link to={'/user/' + path}  className={classes.root}>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt={name} src={photo.file.url} />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={birthPlace}
                />
            </ListItem>
        </Link>
    )
}