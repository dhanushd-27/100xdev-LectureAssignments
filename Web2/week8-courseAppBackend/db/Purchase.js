const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const purchaseSchema = new Schema({
    courseId: ObjectId,
    userId: ObjectId
})

const PurchaseModel = mongoose.model('purchase', purchaseSchema)

module.exports = PurchaseModel