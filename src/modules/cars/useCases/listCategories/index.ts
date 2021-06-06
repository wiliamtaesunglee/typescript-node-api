import CategoriesRepository from "../../repositories/CategoriesRepository";
import { ListCategoresController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository();
const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoresController = new ListCategoresController(
  listCategoryUseCase
);

export { listCategoresController };
