import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createBoardTemplate} from "./view/board.js";
import {createSiteFilterTemplate} from "./view/filter.js";
import {createLoadMoreButton} from "./view/load-more-button.js";
import {createTaskEditTemplate} from "./view/task-edit.js";
import {createTaskTemplate} from "./view/task.js";

const TASK_COUNT = 3;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createSiteFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(taskListElement, createTaskEditTemplate(), `beforeend`);
for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeend`);
}
render(boardElement, createLoadMoreButton(), `beforeend`);


