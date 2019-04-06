# Sidekicker Coding Challenge

## Setup
* Install [Docker](https://docs.docker.com/get-started/)
* Build: `docker-compose build`
* Run: `docker-compose up`
* Execute tasks: `docker-compose exec <container_name> <cmd>`. 
  * e.g. `docker-compose exec coding-challenge-backend php artisan migrate`

## Development
* React frontend: http://localhost
* Lumen backend: http://localhost:8000

## Git branch
Switch branch from `master` to `test`

## For backend

### Data
* `docker-compose exec coding-challenge-backend php artisan migrate`
* `docker-compose exec coding-challenge-backend php artisan db:seed`

### Routing

```
$router->group(['prefix' => 'api'], function () use ($router) {
  $router->get('jobs', 'JobController@index');
  $router->post('job', 'JobController@createJob');
  $router->get('job/delete/{id}', 'JobController@deleteJob');
});
```

### Testing
* `docker-compose exec coding-challenge-backend /var/www/vendor/bin/phpunit`


### Issues

If you have issue with cors
https://github.com/spatie/laravel-cors
e.g. need to restart docker-compose
you many need to run `composer require spatie/laravel-cors`



## For front end

### Install
* `docker-compose exec frontend yarn install`
