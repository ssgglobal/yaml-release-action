const core  = require('@actions/core');
const exec  = require('@actions/exec');
const fs    = require('fs');
const yaml  = require('yaml');

async function run() {
    try {

        if (fs.lstatSync(core.getInput('version')).isFile()) {
            var version   = fs.readFileSync(core.getInput('version'));
        } else {
            var version   = core.getInput('version');
        }

        if (! /(?<=^v?|\sv?)(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-(?:0|[1-9]\d*|[\da-z-]*[a-z-][\da-z-]*)(?:\.(?:0|[1-9]\d*|[\da-z-]*[a-z-][\da-z-]*))*)?(?:\+[\da-z-]+(?:\.[\da-z-]+)*)?(?=$|\s)/ig.test(version)) {
            throw "Not a valid semantic version.";
        }
        
        var release = fs.readFileSync(core.getInput('release'), 'utf-8');
        release     = yaml.parse(release);

    } catch (error) {
        core.setFailed(error.message);
    }
}

module.exports  = run;