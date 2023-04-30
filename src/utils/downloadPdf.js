import axios from 'axios'
import fs from 'fs'

export async function downloadPdf(url, path) {
    const response = await axios({
        method: 'GET',
        url: url,
        responseType: 'stream'
    })

    response.data.pipe(fs.createWriteStream(path));

    return new Promise((resolve, reject) => {
        response.data.on('end', () => {
            resolve();
        });

        response.data.on('error', err => {
            reject(err);
        });
    });
}