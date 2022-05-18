import mock from '../utils/mock';

mock.onPost('/api/home/login').reply((config) => {
    const {email, password} = JSON.parse(config.data)

    if(email !== 'denilson.silvastt@gmail.com' || password !== 'admin'){
        return [400, {message: 'Seu email ou senha estão incorretos'}]
    }

    const user = {
        id: 1,
        name: 'denilson',
        username: 'denny',
        email: 'denilson.silvastt@gmail.com'
    }

    return [200,{user}]
})

/*
mock.onPost('/api/home/login').reply(200,{
    'id': 1,
    'username': 'denilson',
    'email': 'denilson.silvastt@gmail.com'
}) 
*/