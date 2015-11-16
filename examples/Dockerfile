menagerie:
  build: .
  command: /opt/menagerie/node_modules/.bin/pm2 start app.js --name "menagerie" --no-daemon
{% if postgres %}
  links:
     - postgres
{% endif %}
  environment:
    - NODE_ENV={{NODE_ENV}}
    - NODE_USERNAME={{NODE_USERNAME}}
    - NODE_PASSWORD={{NODE_PASSWORD}}
  restart: always
  log_opt:
      max-size: "1g"
      max-file: "4"
  ports:
    - "80:1337"
{% if NODE_ENV === 'local' %}
postgres:
    image: postgres
    ports:
        - "5432:5432"
    log_opt:
        max-size: "1g"
        max-file: "4"
{% endif %}
