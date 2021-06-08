import CategoriesRepository from "../../repositories/implementations/CategoriesRepository";
import { ListCategoresController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoresController = new ListCategoresController(
  listCategoryUseCase
);

export { listCategoresController };
