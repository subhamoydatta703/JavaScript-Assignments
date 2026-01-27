// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

const fs = require('fs').promises;
async function fileReadAndWrite() {

    try {
        const data = await fs.readFile('sample_file.txt', 'utf8');
        console.log("File content: ",data);
        const cleanData = data.replace(/\s+/g, ' ').trim();
        console.log("Cleaned data: ", cleanData);

         await fs.writeFile('sample_file.txt',cleanData,'utf8');
        

    } catch (error) {
console.error("Error: ",error);

    }
}
fileReadAndWrite();

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```