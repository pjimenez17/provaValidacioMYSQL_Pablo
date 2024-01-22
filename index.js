const { getPreguntes,
    insertPregunta,
    insertResposta,
    getRespostes } = require('./db.js')

async function main() {
    try {
        const pregunta = 'Cuanto es 3+3?';
        const insertResult = await insertPregunta(pregunta);

        const id = 2;
        const respuesta = '6';
        const insertRespostaResult = await insertResposta(id, respuesta);

        const preguntes = await getPreguntes();
        console.log('Preguntes:', preguntes);

        const respostes = await getRespostes();
        console.log('Respostes:', respostes);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();

    