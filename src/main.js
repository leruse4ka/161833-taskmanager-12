import SiteMenuView from "./view/site-menu.js";
import FilterView from "./view/filter.js";
import BoardPresenter from "./presenter/board.js";
import {
  generateTask
} from "./mock/task.js";
import {
  generateFilter
} from "./mock/filter.js";
import {
  render,
  RenderPosition
} from "./utils/render.js";

const TASK_COUNT = 22;

const tasks = new Array(TASK_COUNT).fill().map(generateTask);

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
const filters = generateFilter(tasks);

render(siteHeaderElement, new SiteMenuView(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterView(filters), RenderPosition.BEFOREEND);

const boardPresenter = new BoardPresenter(siteMainElement);

boardPresenter.init(tasks);
