const { SUCCESS } = require('../../constants/shared/success')
const { ERROR } = require('../../constants/shared/error')

const Reflection = require('../../models/stoic-module/reflection-model')

class StoicController {

    // @desc   Get Timesheet
    // @route  GET /api/v1/stoic/reflection
    // @access Public
    async fetchReflections(req, res){
        try {
            const fetchReflections = await Reflection.find()

            res.status(404).json({
                status: SUCCESS.RESPONSES.SUCCESS,
                results: fetchReflections.length,
                data: {
                    reflections: fetchReflections,
                }
            })
        } catch (error) {
            res.status(404).json({
                status: ERROR.API_ERROR_404,
                message: error.message
            })
        }
    }
}

module.exports = new StoicController();