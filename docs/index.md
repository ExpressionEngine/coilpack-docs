# Coilpack

*Currently in Beta*

Coilpack is a composer package that lets you harness the powerful Laravel ecosystem to bring your ExpressionEngine content forward in exciting new ways.  Once installed in a standard Laravel application Coilpack loads ExpressionEngine and integrates many core services.

## Feature Highlights

- Twig & Blade support for many ExpressionEngine tags
- Translate ExpressionEngine Extension Hooks into Laravel Events
- GraphQL endpoint for querying ExpressionEngine content
- Access the ExpressionEngine container inside Laravel
- ExpressionEngine authenticated members available natively within Laravel

## Table of Contents

- [Getting Started](./getting-started.md)
- [Configuration](./configuration.md)
- [Events](./events.md)
- [Routing](./routing.md)
- [GraphQL](./graphql/index.md)
- [Templates](./templates/index.mdx)

Advanced
- [Authentication](./advanced/authentication.md)
- [Filesystem](./advanced/filesystem.md)
- [Database](./advanced/database.md)
- [Add-ons](./advanced/addons.md)

## Known Issues

- Using Laravel Telescope will register a wildcard event listener that conflicts with how we translate ExpressionEngine extensions into Laravel Events.  For now we recommend setting `TELESCOPE_EVENT_WATCHER=false` in your .env file otherwise your site may not render properly.
- While we fully intend to support Laravel 7, Coilpack is currently only working with Laravel 8 and 9.  This is due to a dependency restriction in the GraphQL package we are using.
- The Channel Entries Eloquent model does not currently support conditional field logic.
- Coilpack works well out of the box when using Laravel Valet and with Apache webservers, but we have noticed some issues in certain Nginx installs.  We recommend using a configuration similar to the one below with Nginx:

```
server {
    listen 80;
    listen 443 ssl;

    server_name site.test;

    ssl_certificate /etc/ssl/certs/master.crt;
    ssl_certificate_key /etc/ssl/certs/master.key;

    root /var/www/html/site/public;
    index index.php index.html;

    # serve static files directly
	location ~* \.(jpg|jpeg|gif|css|png|js|ico|html)$ {
        if (!-e $request_filename) {
            rewrite ^/(.*)$ /index.php?/$1 last;
            break;
        }
		access_log off;
		expires max;
		log_not_found off;
	}

	# removes trailing slashes (prevents SEO duplicate content issues)
	if (!-d $request_filename)
	{
		rewrite ^/(.+)/$ /$1 permanent;
	}

	# enforce NO www
	if ($host ~* ^www\.(.*))
	{
		set $host_without_www $1;
		rewrite ^/(.*)$ $scheme://$host_without_www/$1 permanent;
	}

	# unless the request is for a valid file (image, js, css, etc.), send to bootstrap

	location / {
		try_files $uri $uri/ /index.php?$query_string;
	}

	location ~* \.php$ {
        try_files $uri $uri/ /index.php = 404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
		deny all;
	}

    include /etc/nginx/common.d/*.conf;
}
```

## What's with the name?

The name comes from the automotive component.  A *coil pack* is responsible for delivering high voltage to the spark plug and igniting the fuel.  We thought the name was fitting for how this package integrates Laravel's Illuminate components with ExpressionEngine to power new possibilities.