const fetch = require('node-fetch');  // Asegúrate de instalar fetch si es necesario

exports.handler = async function(event, context) {
    const body = JSON.parse(event.body);
    const token = body.token;

    try {
        const response = await fetch('http://tu-backend-api-o-servicio.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
        });

        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: data.message })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Se produjo un error: ' + error.message })
        };
    }
};
