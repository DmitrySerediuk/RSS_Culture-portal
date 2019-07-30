import React,{useState}from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default function ArchitectItem({name}){
    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://www.fillmurray.com/200/300" />
            </ListItemAvatar>
            <ListItemText primary={name}/>
        </ListItem>
        )
}