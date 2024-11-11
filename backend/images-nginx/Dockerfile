FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /etc/nginx/html/images

RUN chown -R nginx:nginx /etc/nginx/html/images

EXPOSE 4000

CMD ["nginx", "-g", "daemon off;"]
