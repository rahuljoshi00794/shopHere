import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input"
import { MatIconModule } from "@angular/material/icon"
import { MatSelectModule } from "@angular/material/select";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatOptionModule } from "@angular/material/core";

const declarations = [
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule
]

@NgModule({
    imports: [...declarations],
    exports: [...declarations]
})
export class MaterialModule {
}