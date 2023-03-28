# Coilpack

*Currently in Beta*

Coilpack is a composer package that lets you harness the powerful Laravel ecosystem to bring your ExpressionEngine content forward in exciting new ways.  Once installed in a standard Laravel application Coilpack loads ExpressionEngine and integrates many core services.

## Feature Highlights

- Twig & Blade support for many ExpressionEngine tags
- Translate ExpressionEngine Extension Hooks into Laravel Events
- GraphQL endpoint for querying ExpressionEngine content
- Access the ExpressionEngine container inside Laravel
- ExpressionEngine authenticated members available natively within Laravel


## Changelog

To view a list of changes in the project please visit the [current changelog](https://github.com/ExpressionEngine/Coilpack/blob/0.x/CHANGELOG.md).

## Frequently Asked Questions

**Why didn’t we put this in the core?**

We chose to build Coilpack as a separate package so that ExpressionEngine could remain a product focused on stability without major changes affecting our users and add-on developers.  This also gives us flexibility in developing Coilpack to approach solutions in a fresh light and shed some technical debt.

**Why was it built in Laravel and not another framework?**

Packet Tide has been working with Laravel since version 4 which was released almost 10 years ago.  Our experience with the framework is the main reason we chose Laravel along with how easy it makes writing clean expressive code.  This project is completely open source and if somebody wants to fork it and convert Laravel bindings and service providers into another framework that is totally fine.  We may work on extracting pieces into a more framework agnostic package but we believe this was our fastest and most effective way to bring this functionality to our customer base.

**Will this detract from development of ExpressionEngine**

No, it's important to remember that Coilpack serves the purpose of connecting ExpressionEngine to additional services through Laravel.  We are trying to keep the Coilpack layer as thin as possible so that most business logic changes are reflected in the core of ExpressionEngine.  This ensures that changes and improvements are available to all ExpressionEngine users and not just those using Coilpack.

## Known Issues

- Using Laravel Telescope will register a wildcard event listener that conflicts with how we translate ExpressionEngine extensions into Laravel Events.  For now we recommend setting `TELESCOPE_EVENT_WATCHER=false` in your .env file otherwise your site may not render properly.
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