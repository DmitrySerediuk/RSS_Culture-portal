import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from '@wapps/gatsby-plugin-lingui';
import { withI18n } from '@lingui/react';

const ArchitectItem = ({ name, path, img }) => {
    return (
        <ListItem button>
            <Link to={'/user/' + path}>
                <ListItemAvatar>
                    <Avatar alt={name} src={img} />
                </ListItemAvatar>
                <ListItemText primary={name} />
            </Link>
        </ListItem>
    )
}

export default withI18n()(ArchitectItem);
