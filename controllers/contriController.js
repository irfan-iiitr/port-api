import Contribution from '../models/Contribution.js';

// Create a new contribution
export const createContribution = async (req, res) => {
    try {
        const contribution = new Contribution(req.body);
        await contribution.save();
        res.status(201).send(contribution);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all contributions
export const getAllContributions = async (req, res) => {
    try {
        const contributions = await Contribution.find();
        res.send(contributions);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a single contribution by ID
export const getContributionById = async (req, res) => {
    try {
        const contribution = await Contribution.findById(req.params.id);
        if (!contribution) {
            return res.status(404).send('Contribution not found');
        }
        res.send(contribution);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a contribution by ID
export const updateContributionById = async (req, res) => {
    try {
        const contribution = await Contribution.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contribution) {
            return res.status(404).send('Contribution not found');
        }
        res.send(contribution);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a contribution by ID
export const deleteContributionById = async (req, res) => {
    try {
        const contribution = await Contribution.findByIdAndDelete(req.params.id);
        if (!contribution) {
            return res.status(404).send('Contribution not found');
        }
        res.send(contribution);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const githubCreate = async (req, res) => {
    try {
        const contribution = new Contribution(req.body);
        console.log(contribution)
       // await contribution.save();
        res.status(201).send(contribution);
    } catch (error) {
        res.status(400).send(error);
    }
}
