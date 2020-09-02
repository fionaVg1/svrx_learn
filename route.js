get('/api/user/:id').to.json({name:'mock username'});
get('/api/mock/users').to.mock({
    'users|10':[
        {
            'id|+1':0,
            name:'@name',
            'age|18-30':18
        }
    ]
})
post('/api/blog(.*)').to.proxy('http://path.to.api.com');
get('/(.*)').to.send('404 PAGE IS NOT FOUND')
get('/api/songs').to.mock({
    'list|2':[
        {
            'id|+1':1,
        }
    ]
});
route('/(.*)').to.jsonServer();
route('/api/(.*)').rewrite('/{0}').to.jsonServer();// /api/songs  => /songs