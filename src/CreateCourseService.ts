interface CourseParams {
  name: string
  duration: number
  educator: string
}

class CreateCourseService {
  execute({name, duration, educator}: CourseParams) {
    console.log(name, duration, educator)
  }
}

export default new CreateCourseService()
