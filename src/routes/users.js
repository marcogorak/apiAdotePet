import UsersApi from '../api/users';

export default (app, Pets) => {

    const usersApi = new UsersApi(app.datasource.models.Users);

    app.route('/users')
    .all(app.auth.authenticate())
    .get((req, res) =>{
        usersApi.getAll()
            .then(response => {
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.status(response.statusCode);
                res.json(response.data);
            });
    });

    app.route('/users')
    .post((req, res) =>{
        console.log(req.body);
        usersApi.create(req.body)
            .then(response => {
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.status(response.statusCode);
                res.json(response.data);
        });
    });
    
    app.route('/users/:id')
    .all(app.auth.authenticate())
    .get((req, res) =>{
        usersApi.getById(req.params)
            .then(response => {
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.status(response.statusCode);
                res.json(response.data);
        });
        
    })
    .put((req, res) =>{
        console.log(req.body);
        usersApi.update(req.body, req.params)
            .then(response => {
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.status(response.statusCode);
                res.json(response.data);
        });
        
    })
    .delete((req, res) =>{
        usersApi.delete(req.params)
            .then(response => {
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.status(response.statusCode);
                res.json(response.data);
        });
    });

}

