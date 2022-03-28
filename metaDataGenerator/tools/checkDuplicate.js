const fs = require("fs");
const path = require("path");

let duplicates = [];

const areObjectsEqual = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if (
            areObjects && !areObjectsEqual(val1, val2) ||
            !areObjects && val1 !== val2
        ) {
            return false;
        }
    }
    return true;
}

const isObject = (object) => {
    return object != null && typeof object === 'object';
}

const checkDuplicates = () => {
    let attributeListPath = path.join(__dirname, "../assets/list/attributeList.json");

    if (!fs.existsSync(attributeListPath)) {
        console.log("Please generate the metaData before doing the check.");
        return;
    }

    let attributeListBuffer = fs.readFileSync(attributeListPath);
    let attributeList = JSON.parse(attributeListBuffer);

    for (let i = 0; i < attributeList.length; i++) {
        let attributes = attributeList[i];

        for (let j = 0; j < attributeList.length; j++) {
            if (i !== j) {
                if (areObjectsEqual(attributes, attributeList[j])) {
                    duplicates.push({ index: i, attributes });
                }
            }
        }
        
        let progress = (((i + 1) / attributeList.length) * 100);
        console.log("Progress: " + progress.toFixed(1) + "%");
    }
}

checkDuplicates();

console.log(duplicates.length / 2 + " pair of duplicates found.");
if (duplicates && duplicates.length > 0) {
    console.log(`Please check the following indexes: ${duplicates.map(duplicate => duplicate.index)}`);
}