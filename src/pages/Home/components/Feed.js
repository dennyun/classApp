// Imports
import React from "react";
import { makeStyles } from "@material-ui/styles";
import PostCard from "../../../components/PostCard";

// Styles Feed - Material ui
const useStyles = makeStyles({
    root: {

    }
});

//List posts
const posts = [
    {
        id: 1, 
        author:{
            id:1,
            name:'Denilson Silva',
            username: 'denny',
            avatar: '/images/avatars/avatar.jpg'
        },
        title: 'Confidencialidade e integridade',
        date: 'April 7. 2022',
        description: 'O quão importante é manter de sigílo e inalteração nos dados através dos princípios da Segurança da Informação ?',
        hashtags: '#dotnet, #javascript, #reactjs, #developer',
        image: 'https://raw.githubusercontent.com/lucasnhimi/conectadev/master/public/images/posts/post1.png'
    },
    {
        id: 2, 
        author:{
            id:2,
            name:'Igor Araujo',
            username: 'Igor',
            avatar: '/images/avatars/avatar.png'
        },
        title: 'Autencidade e Disponibilidade',
        date: 'April 9. 2021',
        description: 'Os limites na autoridade para um usuário acessar informações e o quanto o acesso a esta informação estará disponível',
        hashtags: '#dotnet, #javascript, #reactjs, #developer',
        image: 'https://raw.githubusercontent.com/lucasnhimi/conectadev/master/public/images/posts/post2.png'
    },

];

// Feed
function Feed() {
    const classes = useStyles();
    return( 
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post}/>
                ))
            }
        </div>
    )
}

export default Feed;