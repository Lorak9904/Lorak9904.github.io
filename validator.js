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

    let responseMessage = '';

    if (isValidToken(tokenValue)) {
        // Grant permission to execute Python code
        responseMessage = 'Permission granted';
        console.log('Permission granted for token:', tokenValue);
        // Perform any necessary actions here
        // You can also return additional data in the responseMessage
    } else {
        // Deny permission
        responseMessage = 'Permission denied';
        console.log('Permission denied for token:', tokenValue);
        // You can provide an error message or additional information here
    }

    // Create a JSON response object
    const jsonResponse = { message: responseMessage };

    // Send the JSON response back to Python
    // Convert the object to a JSON string
    const jsonStr = JSON.stringify(jsonResponse);

    // Send the JSON string back to Python
    window.location.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonStr);
}

// Call the handleRequest function when the page loads
window.addEventListener('DOMContentLoaded', handleRequest);
