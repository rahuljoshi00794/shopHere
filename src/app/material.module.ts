import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input"
import { MatIconModule } from "@angular/material/icon"

const declarations = [
    MatInputModule,
    MatIconModule
]

@NgModule({
    imports: [...declarations],
    exports: [...declarations]
})
export class MaterialModule {
}