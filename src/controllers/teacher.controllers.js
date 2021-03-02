const db = require('../models')
const status = require('http-status');

exports.createTeacher = async (req, res) => {
    try {
        const body = req.body;
        console.log(body)
        const data = await db.teachers.create(body)
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

exports.updateTeacher = async (req, res) => {
    try {
        const body = req.body;
        console.log(body)
        await db.teachers.update(body, {
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
        console.log(error)
        return res.status(status.BAD_REQUEST).json({
            code: status.BAD_REQUEST,
            message: error?.parent?.detail ?? "please contract admin"
        })
    }
}

exports.deleteTeacher = async (req, res) => {
    try {
        const query = req.query;
        await db.sequelize.query(`DELETE FROM public.teachers WHERE id = '${query.id}' `)
        return res.status(status.OK).json({
            code: status.OK,
            message: {
                status: "SUCCESS"
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(status.BAD_REQUEST).json({
            code: status.BAD_REQUEST,
            message: error?.parent?.detail ?? "please contract admin"
        })
    }
}

exports.findTeacher = async (req, res) => {
    try {
        const id = req.query.id;
        const data = await db.teachers.findByPk(id)
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

exports.searchTeacher = async (req, res) => {
    try {
        let condition = ``
        condition = req.query.search ? ` and  ( first_name like '%${req.query.search}%' or  last_name like '%${req.query.search}%' )` : ' ';

        const data = await db.sequelize.query(`SELECT * FROM teachers where 1=1 ${condition}`)
        console.log(data[0])
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