import { NgModule } from '@angular/core';

import { OrderByPipe } from './order-by';
import { ContainsPipe } from './contains.pipe';

export const PIPES = [
    OrderByPipe,
    ContainsPipe
];

@NgModule({
    declarations: PIPES,
    exports: PIPES
})
export class AppPipesModule {}