
// const path = require('path')
import * as fs from 'fs'
// const fs = require('fs')
import {fileMetadataSync} from 'file-metadata';
const pathToPhotos = './photos'
let arr = []
for(let i = 0; i < 50; i++){
    arr.push(fileMetadataSync(pathToPhotos))
}

export default arr

