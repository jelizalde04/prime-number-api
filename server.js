const express = require('express');
const app = express();
const port = 3000;

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// API route to get prime numbers up to the max number
app.get('/prime-numbers', (req, res) => {
    const max = parseInt(req.query.max);
    if (isNaN(max)) {
        return res.status(400).json({ error: 'Invalid maximum number' });
    }

    const primes = [];
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) primes.push(i);
    }

    res.json({ primes });
});

app.listen(port, () => {
    console.log(`Prime Number API listening at http://localhost:${port}`);
});
