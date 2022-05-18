import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, CardHeader, CardContent, CardActions, CardActionArea ,Typography, Avatar } from "@mui/material";
import { Favorite, Bookmark, Message} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const useStyles = makeStyles({
    root: {
        marginBottom: 16
    },
    subheader: {
        display: 'flex',
        alignItems: 'center'
    },
    caption: {
        marginRight: 8
    },
    message: {
        height: 'auto',
        marginBottom: 16,
        padding: '0 24px'
    },
    image: {
        height: 300,
        width: '100%',
        maxWidth: '100%'
    },
    content: {
        padding: 0
    },
    reactions: {

    }
});

function PostCard({post}) {
    const classes = useStyles();

    return(
        <Card className={classes.root} >
            <CardHeader 
                avatar={<Avatar src={post.author.avatar}></Avatar>}
                
                title={<Typography 
                    //Style Typography
                    sx={{ 
                        fontWeight: 500, 
                        fontSize: 14, 
                        letterSpacing: '-0.05px' 
                    }} 
                    variant="h6">{post.title}</Typography>}

                subheader={
                    <div sx={{marginRight: 8}} className={classes.subheader} >
                        <Typography variant="caption" sx={{marginRight: '8px'}}>
                            {'Avaliado por'}
                        </Typography>

                        <Typography variant="subtitle2" sx={{marginRight: '8px'}}>
                            {post.author.name}
                        </Typography>
                        
                        <Typography variant="subtitle2" sx={{marginRight: '8px'}}>
                            {post.date}
                        </Typography>
                    </div>
                }
            />    

            <CardContent className={classes.content}>
                <Typography className={classes.message} variant="body1">
                    {post.hashtags}
                </Typography>
                <CardActionArea>
                <img src={post.image} className={classes.image} alt="img"/>
                </CardActionArea>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <Favorite/>
                    <Typography
                        style={{cursor: 'pointer'}}
                        color="textSecondary"
                        variant="body2"
                    >
                        {'10'}
                    </Typography >
                </IconButton>

                <IconButton aria-label="comment">
                    <Message/>
                    <Typography
                        className={classes.reactions}
                        color='textSecondary'
                        variant="body2"
                    >
                        {'30'}
                    </Typography>
                </IconButton>

                <IconButton aria-label="favorite" 
                //Style Favorite Button
                sx={{
                    marginLeft: 'auto'
                }}>
                    <Bookmark />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default PostCard;