# BUILD: docker build -t perfectfit .
# RUN: docker run -v $(pwd)/src/:/opt/app/src perfectfit

FROM node:12

# The port to expose
EXPOSE 3030

# Set the node_env variable and node_modules in path
ENV NODE_ENV=development
ENV PATH=/opt/node_modules/.bin:/usr/local/bin:$PATH

# If you want more debugging information
ENV DEBUG=server:*

# Set the current working directory
WORKDIR /opt

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Set the working directory where we mount our src code
WORKDIR /opt/app

COPY knexfile.js ./
COPY docker-entrypoint.sh ./

ENTRYPOINT ["./docker-entrypoint.sh"]

# Command to start application
CMD ["nodemon", "./src/bin/www"]
