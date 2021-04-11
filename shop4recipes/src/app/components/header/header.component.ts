import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../sharedComponents/data.storage.service";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
}) 

export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();

    collapsed = true;

    constructor(private dataStorageService: DataStorageService) {}

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes();
    }
}