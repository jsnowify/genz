<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Laravel + React Application (Laravel 11.x)

This project is a web application built with Laravel 11.x as the backend and React as the frontend, using MySQL as the database.

## Prerequisites

Before you begin, ensure you have the following installed:

-   **PHP:** Version 8.2 or higher (required for Laravel 11.x).
-   **Composer:** Dependency manager for PHP.
-   **Node.js:** Version 16 or higher (required for React).
-   **npm or Yarn:** Package managers for Node.js.
-   **MySQL:** Database server.
-   **Git:** Version control system (optional, but recommended).

### Installation Instructions

1.  **Clone the Repository:**

    ```bash
    git clone [your-repository-url]
    cd [your-repository-directory]
    ```

2.  **Install PHP Dependencies (Laravel):**

    ```bash
    composer install
    ```

3.  **Configure Environment Variables:**

    -   Copy `.env.example` to `.env`.
    -   Edit `.env` and configure your database settings (DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD).
    -   Generate an application key:

        ```bash
        php artisan key:generate
        ```

4.  **Run Database Migrations:**

    ```bash
    php artisan migrate
    ```

5.  **Install Node.js Dependencies (React):**

    ```bash
    cd resources/js
    npm install # or yarn install
    ```

6.  **Compile Assets (React):**

    ```bash
    npm run build # or yarn build
    ```

7.  **Start the Development Server:**

    ```bash
    php artisan serve
    ```

    -   The Laravel development server will start, typically at `http://127.0.0.1:8000`.

8.  **Start the React development server (if needed during development):**
    -   If you are making frequent changes to the React portion of the app and want hot reloading, you can start the react dev server in a new terminal window.
        ```bash
        cd resources/js
        npm run dev # or yarn dev
        ```

### Database Setup

-   Ensure MySQL is running.
-   Create a database as specified in your `.env` file.
-   Run the migrations to create the necessary tables.

### Important Notes

-   Remember to configure your `.env` file with the correct database credentials.
-   For production environments, ensure you compile your React assets with `npm run production` or `yarn production`.
-   For production, you should not use the artisan serve command. Instead use a webserver such as Nginx or Apache.
-   Ensure that you have the correct php extensions installed. such as php-mysql, php-mbstring, php-xml, and php-json.
-   Consider using a virtual environment like Laravel Sail or Docker for a consistent development environment.

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

-   [Simple, fast routing engine](https://laravel.com/docs/routing).
-   [Powerful dependency injection container](https://laravel.com/docs/container).
-   Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
-   Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
-   Database agnostic [schema migrations](https://laravel.com/docs/migrations).
-   [Robust background job processing](https://laravel.com/docs/queues).
-   [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

-   **[Vehikl](https://vehikl.com/)**
-   **[Tighten Co.](https://tighten.co)**
-   **[WebReinvent](https://webreinvent.com/)**
-   **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
-   **[64 Robots](https://64robots.com)**
-   **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
-   **[Cyber-Duck](https://cyber-duck.co.uk)**
-   **[DevSquad](https://devsquad.com/hire-laravel-developers)**
-   **[Jump24](https://jump24.co.uk)**
-   **[Redberry](https://redberry.international/laravel/)**
-   **[Active Logic](https://activelogic.com)**
-   **[byte5](https://byte5.de)**
-   **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
