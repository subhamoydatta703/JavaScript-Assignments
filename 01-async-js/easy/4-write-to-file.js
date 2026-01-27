// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require('fs').promises;
async function writeFile() {

    try {
        const data = { name: 'John', age: 30, city: 'New York' };
        await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');

        console.log('Files created successfully');

    } catch (error) {
        console.error("Erroe: ", error);

    }
}
writeFile();