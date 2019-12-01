import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { EmptyStateComponent } from '../../components/empty-state/empty-state.component';
import { ItemComponent } from '../../components/data-item/data-item.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [
        HomePage,
        EmptyStateComponent,
        ItemComponent,
    ]
})
export class HomePageModule {}
