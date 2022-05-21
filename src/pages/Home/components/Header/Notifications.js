import React, { useEffect, useRef, useState } from "react";
import { IconButton, SvgIcon, Popover, Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../../../../actions/notificationsActions";
import '../../style.css'

import {
    Bell as BellIcon,
    Star as StarIcon,
    MessageCircle as MessageIcon,
    Heart as HeartIcon,
    Users as ConnectionIcon,
  } from 'react-feather';
  
  
  const iconsMap = {
    reviews: StarIcon,
    new_comment: MessageIcon,
    like: HeartIcon,
    connection: ConnectionIcon,
  };
  
  function Notifications() {
    const account = useSelector((state) => state.account);
    const isAuthenticated = !!account.user;
    const notifications = useSelector(
      (state) => state.notifications.notifications,
    );
  
    const ref = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    useEffect(() => {
      dispatch(getNotifications());
    }, [dispatch]);
  
    return (
      isAuthenticated && (
        <>
          <IconButton ref={ref} onClick={handleOpen}>
            <SvgIcon>
              <BellIcon />
            </SvgIcon>
          </IconButton>
          <Popover
            onClose={handleClose}
            open={isOpen}
            anchorEl={ref.current}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Box p={2}>
              <Typography variant="h6" color="textPrimary">
                Notificações
              </Typography>
            </Box>
            <List>
              {notifications.map((notification) => {
                const Icon = iconsMap[notification.type];
                return (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className='avatar-notifications'>
                        <SvgIcon>
                          <Icon />
                        </SvgIcon>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={notification.title}
                      primaryTypographyProps={{
                        variant: 'subtitle2',
                        colo: 'textPrimary',
                      }}
                      secondary={notification.description}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Popover>
        </>
      )
    );
  }
  
  export default Notifications;