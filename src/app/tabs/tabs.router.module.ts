import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'resolver',
                children: [
                    {
                        path: '',
                        loadChildren: '../resolver/resolver.module#ResolverPageModule'
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: '../settings/settings.module#SettingsPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/resolver',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/resolver',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
    public constructor() {
        console.log('TabsPageRoutingModule');
    }
}
