const core = require('@actions/core');
const fs = require('fs');

try {
    const location = core.getInput('xcode_version_location');

    console.log(`Reading Xcode version from ${location}`);

    const xcodeFileContent = fs.readFileSync(location, 'utf8');
    const xcodeVersion = xcodeFileContent.trim();
    
    core.setOutput("xcode_version", xcodeVersion);

    console.log(`Loaded Xcode version is ${xcodeVersion}`);
} catch (error) {
    core.setFailed(error.message);
}