// List of valid tokens
const validTokens = ['0001', '0002', '0003'];

// Function to check if a token is valid
function isValidToken(token) {
    return validTokens.includes(token);
}

// Handle a request with a token
function handleRequest(token) {
    if (isValidToken(token)) {
        // Grant permission to execute Python code
        console.log('Permission granted for token:', token);
        // Perform any necessary actions here
        // Return a response or execute Python code
    } else {
        // Deny permission
        console.log('Permission denied for token:', token);
        // Return an error response or deny Python code execution
    }
}

// Example usage: replace 'tokenValue' with the actual token from the Python code
const tokenValue = '0001'; // Replace with the token from the Python computer
handleRequest(tokenValue);
