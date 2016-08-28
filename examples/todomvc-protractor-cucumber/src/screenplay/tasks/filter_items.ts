import { PerformsTasks, Task } from 'serenity-bdd/lib/screenplay';
import { Click, step } from 'serenity-bdd/lib/screenplay-protractor';

import { TodoList } from '../user_interface';

export class FilterItems implements Task {
    static toShowOnly(taskType: string) {
        return new FilterItems(taskType);
    }

    @step('{0} filters the list to show only #taskType items')
    performAs(actor: PerformsTasks): Promise<void> {
        return actor.attemptsTo(
            Click.on(TodoList.Filter.of(this.taskType).called('filter by ' + this.taskType))
        );
    }

    constructor(private taskType: string) {
    }
}
