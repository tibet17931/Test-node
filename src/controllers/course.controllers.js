const db = require('../models')
const status = require('http-status');
const clog = require('clog');

exports.createCourse = async (req, res) => {
    try {
        const body = req.body;
        clog.debug(body)
        const data = await db.course.create(body)
        return res.status(status.OK).json({
            code: status.OK,
            message: data
        })
    } catch (error) {
        return res.status(status.BAD_REQUEST).json({
            code: status.BAD_REQUEST,
            message: error?.parent?.detail ?? "please contract admin"
        })
    }
}

exports.updateCourse = async (req, res) => {
    try {
        const body = req.body;
        clog.debug(body)
        await db.course.update(body, {
            where: {
                id: body.id
            }
        })
        return res.status(status.OK).json({
            code: status.OK,
            message: {
                status: "SUCCESS"
            }
        })
    } catch (error) {
        clog.debug(error)
        return res.status(status.BAD_REQUEST).json({
            code: status.BAD_REQUEST,
            message: error?.parent?.detail ?? "please contract admin"
        })
    }
}

exports.deleteCourse = async (req, res) => {
    try {
        const query = req.query;
        await db.sequelize.query(`DELETE FROM course WHERE id = '${query.id}' `)
        return res.status(status.OK).json({
            code: status.OK,
            message: {
                status: "SUCCESS"
            }
        })
    } catch (error) {
        clog.debug(error)
        return res.status(status.BAD_REQUEST).json({
            code: status.BAD_REQUEST,
            message: error?.parent?.detail ?? "please contract admin"
        })
    }
}

exports.findCourse = async (req, res) => {
    try {
        const id = req.query.id;
        const data = await db.course.findByPk(id)
        return res.status(status.OK).json({
            code: status.OK,
            message: data ?? {}
        })
    } catch (error) {
        return res.status(status.BAD_REQUEST).json({
            code: status.BAD_REQUEST,
            message: error?.parent?.detail ?? "please contract admin"
        })
    }
}

exports.searchCourse = async (req, res) => {
    try {
        let condition = ``
        condition = req.query.search ? ` and  ( course_name like '%${req.query.search}%' or  course_description like '%${req.query.search}%' )` : ' ';

        const data = await db.sequelize.query(`SELECT * FROM course where 1=1 ${condition}`)
        clog.debug(data[0])
        return res.status(status.OK).json({
            code: status.OK,
            message: data[0] ?? {}
        })
    } catch (error) {
        return res.status(status.BAD_REQUEST).json({
            code: status.BAD_REQUEST,
            message: error?.parent?.detail ?? "please contract admin"
        })
    }
}