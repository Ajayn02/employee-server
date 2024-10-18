const express=require('express')
const employeeController=require('../Controllers/employeeController')



const routes=express.Router()

routes.post('/addemp',employeeController.addEmployee)
routes.get('/employees',employeeController.getEmployee)
routes.delete('/deleteemp/:id',employeeController.deleteEmployee)
routes.put('/updateemp/:id',employeeController.updateEmployee)

module.exports=routes