
const router = require('express').Router();
var multer = require('multer')
// var upload = multer({ dest: 'uploads/' })

//Controllers
const Teachers = require('../controllers/teacher.controllers');
const Course = require('../controllers/course.controllers');

//Routes
router.post('/create-teacher', Teachers.createTeacher);
router.put('/update-teacher', Teachers.updateTeacher);
router.delete('/delete-teacher', Teachers.deleteTeacher);
router.get('/find-teacher', Teachers.findTeacher)
router.get('/search-teacher', Teachers.searchTeacher)

router.post('/create-course', Course.createCourse);
router.put('/update-course', Course.updateCourse);
router.delete('/delete-course', Course.deleteCourse);
router.get('/find-course', Course.findCourse)
router.get('/search-course', Course.searchCourse)

module.exports = router;