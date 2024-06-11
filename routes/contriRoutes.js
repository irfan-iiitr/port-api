import express from "express";
const router = express.Router(); // Create a new router object

// Import controllers
import * as contributionController from '../controllers/contriController.js';

router.post('/contributions', contributionController.createContribution);
router.get('/contributions', contributionController.getAllContributions);
router.get('/contributions/:id', contributionController.getContributionById);
router.patch('/contributions/:id', contributionController.updateContributionById);
router.delete('/contributions/:id', contributionController.deleteContributionById);

export default router;
