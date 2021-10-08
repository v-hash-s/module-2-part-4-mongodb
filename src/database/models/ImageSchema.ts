import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

const imageSchema = new Schema({
    id: String,
    path: String,
    metadata: Object

})

const ImageModel = mongoose.model('Images', imageSchema)

export default ImageModel