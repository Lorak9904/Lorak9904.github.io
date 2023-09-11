// List of valid tokens
const validTokens = ['0001', '0002', '0003'];

// Function to check if a token is valid
function isValidToken(token) {
    return validTokens.includes(token);
}

// Handle a request with a token sent from Python
function handleRequest() {
    // Extract the token from the query parameters of the URL
    const urlParams = new URLSearchParams(window.location.search);
    const tokenValue = urlParams.get('token');

    if (isValidToken(tokenValue)) {
        // Grant permission to execute Python code
        console.log('Permission granted for token:', tokenValue);
        // Perform any necessary actions here
        // Return a response or execute Python code
    } else {
        // Deny permission
        console.log('Permission denied for token:', tokenValue);
        // Return an error response or deny Python code execution
    }
}

// Call the handleRequest function when the page loads
window.addEventListener('load', handleRequest);
