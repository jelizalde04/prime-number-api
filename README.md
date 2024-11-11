# Prime Number API

This is a simple API that returns all prime numbers less than or equal to a given maximum number.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/jelizalde04/prime-number-api.git
    cd prime-number-api
    ```

2. Build and run the Docker container locally:
    ```bash
    docker build -t prime-number-api .
    docker run -p 3000:3000 prime-number-api
    ```

3. Access the API at `http://localhost:3000/prime-numbers?max=<number>`.

