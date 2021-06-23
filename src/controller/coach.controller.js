const Coach = require("../models/coach.model");

module.exports = {
	create(req, res) {
		const { body } = req;

		Coach.create(body)
			.then((coach) => {
				res.status(201).json(coach);
			})
			.catch((err) => {
				res.status(400).json({ message: err.message });
			});
	},
	list(req, res) {
		Coach.find()
			.then((coaches) => {
				res.status(200).json(coaches);
			})
			.catch((err) => {
				res.status(400).json({ message: err.message });
			});
	},
	show(req, res) {
		const { coachId } = req.params;

		Coach.findById(coachId)
			.then((coach) => {
				res.status(200).json(coach);
			})
			.catch((err) => {
				res.status(404).json({ message: err.message });
			});
	},
	update(req, res) {
		const {
			params: { coachId },
			body,
		} = req;

		Coach.findByIdAndUpdate(coachId, body, {
			new: true,
		})
			.then((coach) => {
				res.status(200).json(coach);
			})
			.catch((err) => {
				res.status(400).json({ message: err.message });
			});
	},
	destroy(req, res) {
		const { coachId } = req.params;

		Coach.findByIdAndDelete(coachId)
			.then((coach) => {
				res.status(200).json(coach);
			})
			.catch((err) => {
				res.status(400).json({ message: err.message });
			});
	},
};
