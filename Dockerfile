FROM httpd:2.4

COPY ./htdocs/* /usr/local/apache2/htdocs/
COPY ./conf/* /usr/local/apache2/conf/

CMD httpd -D FOREGROUND