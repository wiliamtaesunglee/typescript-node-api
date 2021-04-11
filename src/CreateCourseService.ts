interface ICourseParams {
  name: string;
  duration: number;
  educator: string;
}

class CreateCourseService {
  execute({ name, duration, educator }: ICourseParams) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
