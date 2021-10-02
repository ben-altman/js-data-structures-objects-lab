// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    const newDriver = Object.assign({}, obj, {[key]: value});
    return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign(obj, {[key]: value});
};

function deleteFromDriverByKey(obj, key) {
    const keylessDriver = Object.assign({}, obj);
    delete keylessDriver[key];
    return keylessDriver;
};

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key];
    return obj;
};