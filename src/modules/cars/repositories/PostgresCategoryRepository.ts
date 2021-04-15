import { Category } from "../model/Category";
import { ICategoresRepository, ICreateCategoryDTO } from "./ICategoriesRepository";


class PostgresCategoriesRepository implements ICategoresRepository {
  list(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({name, description}: ICreateCategoryDTO) {
    console.warn(name, description)
    throw new Error("Method not implemented.");
  }
  findByName(name: string): Category {
    console.warn(name)
    throw new Error('Methods not implemented.')
  }
}

export { PostgresCategoriesRepository }
