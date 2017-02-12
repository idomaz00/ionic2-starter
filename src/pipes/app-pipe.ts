import { NgModule } from '@angular/core';

import { OrderByIdPipe } from './order-by';

export const PIPES = [
    OrderByIdPipe
];

@NgModule({
    declarations: PIPES,
    exports: PIPES
})
export class AppPipesModule {}