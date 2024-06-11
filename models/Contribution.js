import mongoose from 'mongoose';

// Define a schema for the Contribution model
const contributionSchema = new mongoose.Schema({
    repo: {
        type: String,
        required: true
    },
    contributionDescription: {
        type: String,
        required: true
    },
    repoOwner: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

// Create the Contribution model using the schema
const Contribution = mongoose.model('Contribution', contributionSchema);

export default Contribution;
