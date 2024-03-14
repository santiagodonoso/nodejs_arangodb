FROM node:21.7.1
WORKDIR /app
COPY . .
RUN npm install
CMD nodemon app.js
# CMD python -m bottle --server paste --bind 0.0.0.0:80 --debug --reload app