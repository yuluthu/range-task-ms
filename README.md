Steps for recreation

1. run `composer update` & `npm i` in `range-laravel-backend` (laravel) and `the-range-task` (react) directories respectively
2. in the laravel directory, run `cp .env.example .env` and `php artisan key:generate`
3. run `php artisan migrate` and `php artisan db:seed` (no users are created/credentials required, the laravel codebase is as simple as possible)
4. in seperate terminal windows, run `php artisan serve` in the laravel directory and `npm run dev` in the react directory
5. go to the specified url from the result of `npm run dev` to see the app. I have hardcoded a 5s delay into the products being returned to show the page handling a slow response time of the API