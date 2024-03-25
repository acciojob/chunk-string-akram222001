function stringChop(str, size) {
    // Check if the input string is null or empty
    if (!str) {
        return [];
    }

    // Initialize an empty array to store the chunks
    const chunks = [];

    // Iterate through the string and slice it into chunks of length size
    for (let i = 0; i < str.length; i += size) {
        // Slice the string to get a chunk of length size
        const chunk = str.slice(i, i + size);
        // Push the chunk into the chunks array
        chunks.push(chunk);
    }

    return chunks;
}

// Test the function with user input
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."));
alert(stringChop(str, size));
