FROM httpd:2.4

RUN set -eux; \
	apt-get update; \
	apt-get install -y --no-install-recommends \
		curl \
	;

COPY ./htdocs/* /usr/local/apache2/htdocs/
COPY ./conf/* /usr/local/apache2/conf/

CMD httpd -D FOREGROUND