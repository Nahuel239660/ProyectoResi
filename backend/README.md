# GraphQL API for Songs and Artists

This project is a GraphQL API for managing songs and artists. It allows performing query and mutation operations on songs and artists using GraphQL.

## Features

- **Queries:**

  - Retrieve a song by its ID
  - Retrieve a list of songs with optional filters and sorting
  - Retrieve an artist by its ID

- **Mutations:**
  - authenticate
  - Create a new artist
  - Create a new song
  - Update an existing song
  - Delete a song

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/anagram-dev/onboarding-nahuel.git

   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

### Development

1. **Start the development server>**
   ```bash
   npm run dev
   ```

The server will start and listen on the specified port (default is 4000).

### Build

1. **Build the project for production:**
   ```bash
   npm run build
   ```

### Start

1. **Build the project for production:**

   ```bash
   npm start

   ```

This command compiles the TypeScript code and prepares the project for production deployment.

### Usage

1. **Usage**
   Open your browser and navigate to http://localhost:4000.
   You will see the GraphQL Playground where you can interact with your GraphQL API.

2. **Example Queries:**

```bash
    # Retrieve a song by its ID
    query {
    Song(id: "1") {
    id
    name
    artist {
      id
      name
    }
    albumName
    year
    coverArtUrl
    }
    }

    # Retrieve a list of songs with filters and sorting
    query {
    getSongs(input: { filters: { artist: "Artist Name" }, sort: { year: ASC } }) {
    id
    name
    artist {
      id
      name
    }
    albumName
    year
    coverArtUrl
    }
    }
```

3. **Example Mutation:**

   ```bash
   # Authenticate
   mutation{
     authenticate(username: "user1", password: "pass1") {
     token
     }
   }

   # Create a new artist
   mutation {
     createArtist(name: "New Artist", profileUrl: "http://example.com", bio: "Artist bio") {
       id
       name
       profileUrl
       bio
     }
   }

   # Create a new song
   mutation {
     createSong(input: { name: "New Song", artist: "1", albumName: "New Album", year: 2024, coverArtUrl: "http://example.com/cover.jpg" }) {
       id
       name
       artist {
         id
         name
       }
       albumName
       year
       coverArtUrl
     }
   }
   ```

### Pre-created Users and Rol

For development and testing purposes, the following users have been pre-created with their respective roles:

### Rol

1.  **Admin**
    - Read Songs: Can query the information of any song available in the API.
    - Create Songs: Can add new songs to the database.
    - Update Songs: Can modify the information of any existing song.
    - Delete Songs: Can remove any song from the database.
    - Read Artists: Can query the information of any artist available in the API.
    - Create Artists: Can add new artists to the database.
    - Update Artists: Can modify the information of any existing artist.
    - Delete Artists: Can remove any artist from the database.

2 **User**

- Read Songs: Can query the information of any song available in the API.
- Create Songs: Can add new songs to the database.
- Update Songs: Can modify the information of any existing song.
- Read Artists: Can query the information of any artist available in the API.

3.  **Guest**

- Read Songs: Can query the information of any song available in the API.

### Users

1. **Admin User**

   - Username: user1
   - Password: pass1
   - Role: Administrator

2. **Common User**
   - Username: artist
   - Password: user2
   - Role: pass2
3. **Viewer**
   Username: Guest1
   Password: guestpass
   Role: Viewer

### GraphQL Code Generation

This project uses GraphQL Code Generator to automatically generate TypeScript types based on the GraphQL schema.
This helps in maintaining type safety and improving developer experience.

## Configuration

The code generation is configured using a codegen.ts file located in the src directory.
This configuration file specifies the schema file and the output location for the generated TypeScript types.

    ```bash
    import { CodegenConfig } from '@graphql-codegen/cli';
        const config: CodegenConfig = {
            schema: './schema.ts',  // Path to your GraphQL schema file relative to the src directory
            generates: {
                '../generated/graphql.ts': {  // Path where the generated TypeScript types will be placed
                plugins: [
                'typescript',
                'typescript-resolvers'
                ],
            },
        },
    };
    export default config;
    ```

- schema: Path to the GraphQL schema file relative to src.
- generates: Path where the generated TypeScript types will be saved, relative to src.

### Directory Structure

Ensure that the generated directory exists at the appropriate level. The structure should be as follows:

```bash
/project-root
  /src
    /generated  # This folder will contain the generated TypeScript files
    codegen.ts
    schema.ts
```

### Running Code Generation

To generate TypeScript types, run the following command from the root directory of the project:

```bash
npm run codegen
```

This command uses the configuration specified in src/codegen.ts to generate TypeScript types based on your GraphQL schema.

### Prettier Integration:

- After generating files, Prettier automatically formats the code to adhere to consistent styling rules.
- This is achieved using the afterOneFileWrite hook in the codegen.ts configuration file.

## Docker Setup

This project can be run using Docker for containerization. Follow the steps below to set up and run the application using Docker.

### Prerequisites

    - Docker (version 20.17.0 or compatible)
    - Docker Compose (version 2.29.1 or compatible)

### Dockerfile

The Dockerfile sets up the environment for running the application. Below is the Dockerfile used in this project:

```bash
    # 1. Base image of Node.js
    FROM node:20.17.0

# 2. Set the working directory inside the container
WORKDIR /usr/src/app

# 3. Copy package.json and package-lock.json to the container
COPY package*.json ./

# 4. Install dependencies in the container
RUN npm install

# 5. Copy the rest of the project code to the container
COPY . .

# 6. Expose port 4000 to make the API accessible
EXPOSE 4000

# 7. Command to start your application directly with node
CMD ["node", "dist/index.ts"]

```

### Docker Compose

The docker-compose.yml file defines the services required for the application. It builds the Docker image, maps ports, and sets up networking.
Here is the docker-compose.yml file used in this project:

```bash
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "4000:4000"
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
```

### Running the Application

1. Build and Start the Containers

Run the following command to build and start the containers:

```bash

docker-compose up --build

```

This command builds the Docker image according to the Dockerfile and starts the services defined in the docker-compose.yml file.

2. Check Container Status

You can check the status of the running containers with:

```bash

docker-compose ps

```

3. Stopping the Containers

To stop and remove the containers, run:

```bash

docker-compose down

```

### **Notes**

- Ensure that Docker Desktop is running before executing the Docker Compose commands.
- The application will be available at http://localhost:4000/ after the containers are up and running.
