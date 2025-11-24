// src/api/v1/routes/employeeRoutes.ts

import { Router } from 'express';
import {
  handleGetAllEmployees,
  handleGetEmployeeById,
  handleCreateEmployee,
  handleUpdateEmployee,
  handleDeleteEmployee
} from '../controllers/employeeController';

export const employeeRouter = Router();

// Create Employee
employeeRouter.post('/', handleCreateEmployee);

// Get All Employees
employeeRouter.get('/', handleGetAllEmployees);

// Get Employee by ID
employeeRouter.get('/:id', handleGetEmployeeById);

// Update Employee
employeeRouter.put('/:id', handleUpdateEmployee);

// Delete Employee
employeeRouter.delete('/:id', handleDeleteEmployee);
