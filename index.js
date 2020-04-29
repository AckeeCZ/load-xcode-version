const core = require('@actions/core');
const { execSync } = require("child_process");
const fs = require('fs');

try {
    const location = core.getInput('xcode_version_location');

    console.log(`Reading Xcode version from ${location}`);

    const xcodeFileContent = fs.readFileSync(location, 'utf8');
    const xcodeVersion = xcodeFileContent.trim();
    
    core.setOutput("xcode_version", xcodeVersion);
    console.log(`Loaded Xcode version is ${xcodeVersion}`);

    const autoselect = core.getInput("autoselect_xcode")

    if (autoselect == 'true') {
        const xcodePath = `/Applications/Xcode_${xcodeVersion}.app`

        console.log(`Selecting Xcode at ${xcodePath}`)
        execSync(`sudo xcode-select -switch ${xcodePath}`)
    }

} catch (error) {
    core.setFailed(error.message);
}