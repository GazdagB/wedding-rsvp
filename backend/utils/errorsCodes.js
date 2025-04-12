// errorCodes.js
module.exports = {
    MISSING_PASSWORD: { statusCode: 400, message: 'A jelszó megadása kötelező!' },
    GUEST_NOT_FOUND: { statusCode: 404, message: 'A neved nem szerepel a listán vagy elírtad.' },
    INCORRECT_PASSWORD: { statusCode: 401, message: 'Hibás jelszó. Kérlek ellenőrizd a meghívódon szereplő jelszót.' },
    LIMIT_REACHED: { statusCode: 403, message: 'Elfogytak a beküldhető üzeneteid 3/3 üzenet beküldve.' },
    SERVER_ERROR: { statusCode: 500, message: 'Something went wrong on the server!' },
    NOT_FOUND: { statusCode: 404, message: 'Resource not found!' },
  };