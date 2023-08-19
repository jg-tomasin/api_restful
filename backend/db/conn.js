const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect("mongodb+srv://jgtomasin:9oW56CxnztqxjDKv@cluster2.fc027yk.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log('conectado ao banco!')
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}
module.exports = main