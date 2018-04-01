import { TodoListAppPage } from './app.po';

describe('todo-list-app App', function() {
  let page: TodoListAppPage;

  beforeEach(() => {
    page = new TodoListAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
