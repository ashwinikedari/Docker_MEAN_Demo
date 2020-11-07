
var imageModel = require('../model/imageModel');

exports.postImage = async (body) => {

    try {
        const image = await imageModel.create(body);
        return image;

    } catch (err) {
        throw err;
    }
}

exports.getImages = async () => {
    try {
        const images = imageModel.find({});
        return images;
    } catch (err) {
        throw err;
    }
}