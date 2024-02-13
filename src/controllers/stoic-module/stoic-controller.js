const { SUCCESS } = require('../../constants/shared/success')
const { ERROR } = require('../../constants/shared/error')

const Reflection = require('../../models/stoic-module/reflection-schema')

class StoicController {
    // @desc   Get All Reflections
    // @route  GET /api/v1/stoic/reflections
    // @access Public
    async fetchReflections(req, res){
        try {
            const fetchReflections = await Reflection.find()

            res.status(200).json({
                status: SUCCESS.RESPONSES.SUCCESS,
                results: fetchReflections.length,
                reflections:  fetchReflections,
            })
        } catch (error) {
            res.status(404).json({
                status: ERROR.API_ERROR_404,
                message: error.message
            })
        }
    }

    // @desc   Post One Reflection
    // @route  POST /api/v1/stoic/reflections
    // @access Public
    async addReflection(req, res){
        try {
            const addReflection = await Reflection.create(req.body);

            res.status(201).json({
                status: SUCCESS.RESPONSES.CREATE,
                data: {
                    reflections: addReflection
                },
            });
        } catch (error) {
            res.status(404).json({
                status: ERROR.API_ERROR_404,
                message: error.message
            })
        }
    }
}

module.exports = new StoicController();