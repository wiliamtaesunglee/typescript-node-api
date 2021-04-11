import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

export const createCourse = (
  request: Request,
  response: Response
): Response => {
  const { name, duration, educator } = request.body;
  CreateCourseService.execute({
    name,
    duration,
    educator,
  });
  return response.send();
};
