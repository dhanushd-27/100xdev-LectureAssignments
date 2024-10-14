const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const purchaseSchema = new Schema({
    courseId: ObjectId,
    userId: ObjectId
})

const PurchaseModel = mongoose.model(purchaseSchema, "purchases")

module.exports = {
    PurchaseModel
}