import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import { Person } from '@material-ui/icons';
import React, { useState } from 'react';
import CategoriesView from "./CategoriesView";

export default (props: { trigger: JSX.Element }) => {
    const [open, setOpen] = useState(false);
    console.log("Foo");

    return <div>
        {React.cloneElement(props.trigger, { onClick: () => setOpen(true) })}
        <Drawer open={open} onClose={() => setOpen(false)}>
            <div style={{ width: '250px', margin: '10px' }}>
                <Typography variant='h5'>
                    Progrssive Reader
                </Typography>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItem>
                </List>
                <CategoriesView/>
            </div>
        </Drawer>
    </div>;
}