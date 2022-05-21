import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200,{
    user:{
        'id': 1,
        'username': 'denilson',
        'email': 'denilson.silvastt@gmail.com',
        'avatar': '/images/avatars/avatar.jpg'
    }
});

mock.onPost('/api/home/login').reply((config) => {
    const {email, password} = JSON.parse(config.data)

    if(email !== 'denilson.silvastt@gmail.com' || password !== 'admin'){
        return [400, {message: 'Seu email ou senha estão incorretos'}]
    }

    const user = {
        id: 1,
        name: 'denilson',
        username: 'denny',
        email: 'denilson.silvastt@gmail.com',
        avatar: '/images/avatars/avatar.jpg'
    }

    return [200,{user}]
})

