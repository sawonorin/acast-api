let successMessage = { status: true, message: 'Request was processed successful', dataitems: null };
let errorMessage = { status: false, message: 'An error occurred while processing your request!', dataitems: null };

module.exports = {
    successMessage,
    errorMessage
}