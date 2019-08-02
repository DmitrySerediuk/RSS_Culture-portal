import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from '@wapps/gatsby-plugin-lingui';

export default function ArchitectItem({ data }) {
    const { name, birthPlace, photo, path } = data;

    return (
        <Link to={'/user/' + path}>
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