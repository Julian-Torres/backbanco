/*
•Número de plástico (único de 12 dígitos)
•Nombre franquicia (Visa, MasterCard, American Express o Dinners Club)
•Tipo (débito o crédito)
Clave (número aleatorio de cuatro dígitos)
*/

const { Schema, model } = require('mongoose');

const TarjetaSchema = Schema({
    numeroPlastico: {
        type: String, required: true, maxLength: 12, minLength: 12,
    },
    franquicia: {
        type: String, required: true, enum: ['Visa', 'MasterCard', 'American Express','Dinners Club']
    },
    tipo: {
        type: String, required: true, enum: ['Crédito', 'Débito']
    },
    clave: {
        type: String, required: true,
    },
    fechaCreacion: {
        type: Date, required: true,
    },
    fechaActualizacion: {
        type: Date, required: true,
    }
});

module.exports = model('Tarjeta', TarjetaSchema);