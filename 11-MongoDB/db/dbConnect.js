import mongoose from 'mongoose';

async function main() {
    await mongoose.connect('mongodb://root:secret@localhost:27017/parkingDB?authSource=admin');
    console.log('MongoDB + Mongoose: Connected');
}

main().catch((error) => {
    console.log('Falha na conexão com o MongoDB: ' + error);
});

export default mongoose;