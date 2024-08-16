# Take-Home Frontend Challenge

## Getting Started

To run this application locally, follow the steps below:

1. **Choose Node.js Version**: Make sure you are using Node.js version 18. You can switch to this version using [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) with the following command:
    ```bash
    nvm use 18
    ```

2. **Install Dependencies**: Install all required dependencies by running:
    ```bash
    npm install
    ```

3. **Start the Application**: To start the React application, execute:
    ```bash
    npm run start
    ```
    This will launch the application, and it will be accessible at `http://localhost:3000`.

## Application Overview

This React application consists of the following routes:

- **Home/Default Route**: Displays the latest Guardian News.
- **News Route**: Provides data related to general news topics.
- **New York Route**: Displays articles fetched from The New York Times.

# Running the React Application in Docker

This project can be containerized using Docker to simplify deployment and ensure consistency across different environments.

## Prerequisites

Before proceeding, ensure you have the following installed:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose** (Optional): [Install Docker Compose](https://docs.docker.com/compose/install/)

## Building the Docker Image

To create a Docker image for this React application, navigate to the project root directory and run:

```bash
docker build -t my-react-app .
```
## And to Remove Docker Image

```bash
docker rm <container_id>
```

