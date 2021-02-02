import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminRouteModule } from "./admin.route";

@NgModule({
    declarations:[
        AdminDashboardComponent
    ],
    imports:[
        CommonModule,
        AdminRouteModule
    ],
    exports:[

    ],
    providers:[

    ]
})
export class AdminModule{}