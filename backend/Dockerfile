# 1. Base image for Node.js (version 20.17.0)
FROM node:20.17.0

# 2. Set the working directory inside the container
# Docker will create this directory if it doesn't exist. This is where your code will be copied.
WORKDIR /usr/src/app

# 3. Copy package.json and package-lock.json to the container
# This allows installing the dependencies inside the container.
COPY package*.json ./

# 4. Install dependencies in the container
# We use 'RUN' to execute commands inside the container, in this case, to install dependencies.
RUN npm install

# 5. Copy the rest of the project code to the container
# All files from your project will be copied, excluding those listed in .dockerignore (like node_modules).
COPY . .

# 6. Build the project
# This command will build the project, in this case, it will compile the TypeScript code to JavaScript.
RUN npm run build

# 7. Expose port 4000 to make the API accessible
# This informs Docker which port your app will use.
EXPOSE 4000

# 8. Command to start your application
# This is the command that will run when the container starts.
CMD ["node", "dist/index.ts"]
