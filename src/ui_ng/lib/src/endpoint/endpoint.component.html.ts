export const ENDPOINT_TEMPLATE: string = `
    <confirmation-dialog #confirmationDialog (confirmAction)="confirmDeletion($event)"></confirmation-dialog>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="row flex-items-xs-between">
                <div class="flex-items-xs-middle option-left">
                    <button class="btn btn-link" (click)="openModal()"><clr-icon shape="add"></clr-icon> {{'DESTINATION.ENDPOINT' | translate}}</button>
                    <create-edit-endpoint (reload)="reload($event)"></create-edit-endpoint>
                </div>
                <div class="flex-items-xs-middle option-right">
                    <hbr-filter filterPlaceholder='{{"REPLICATION.FILTER_TARGETS_PLACEHOLDER" | translate}}' (filter)="doSearchTargets($event)" [currentValue]="targetName"></hbr-filter>
                    <a href="javascript:void(0)" (click)="refreshTargets()">
                        <clr-icon shape="refresh"></clr-icon>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <clr-datagrid>
                <clr-dg-column>{{'DESTINATION.NAME' | translate}}</clr-dg-column>
                <clr-dg-column>{{'DESTINATION.URL' | translate}}</clr-dg-column>
                <clr-dg-column>{{'DESTINATION.CREATION_TIME' | translate}}</clr-dg-column>
                <clr-dg-row *clrDgItems="let t of targets" [clrDgItem]='t'>
                    <clr-dg-action-overflow>
                        <button class="action-item" (click)="editTarget(t)">{{'DESTINATION.TITLE_EDIT' | translate}}</button>
                        <button class="action-item" (click)="deleteTarget(t)">{{'DESTINATION.DELETE' | translate}}</button>
                    </clr-dg-action-overflow>
                    <clr-dg-cell>{{t.name}}</clr-dg-cell>
                    <clr-dg-cell>{{t.endpoint}}</clr-dg-cell>
                    <clr-dg-cell>{{t.creation_time | date: 'short'}}</clr-dg-cell>
                </clr-dg-row>
                <clr-dg-footer>{{ (targets ? targets.length : 0) }} {{'DESTINATION.ITEMS' | translate}}</clr-dg-footer>
            </clr-datagrid>
        </div>
    </div>
`;