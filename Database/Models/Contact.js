import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 6,
        max: 12
    },
    mobileNumber: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: String,
        required: true
    }
}, { timestamps: { createdAt: true, updatedAt: false, versionKey: false } })

contactSchema.index({ mobileNumber: 1, userId: 1 }, { unique: true })

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact