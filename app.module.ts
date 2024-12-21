import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PrimasToolBarComponent } from './primas-tool-bar/primas-tool-bar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeighingBalance1BpLogsComponent } from './weighing-balance1-bp-logs/weighing-balance1-bp-logs.component';
import { WeighingBalance2CrndLogsComponent } from './weighing-balance2-crnd-logs/weighing-balance2-crnd-logs.component';
import { MatInputModule } from '@angular/material/input';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { WeighingBalance3ProdLogsComponent } from './weighing-balance3-prod-logs/weighing-balance3-prod-logs.component';
import { WeighingBalance4ProdLogsComponent } from './weighing-balance4-prod-logs/weighing-balance4-prod-logs.component';
import { VortexCrndLogsComponent } from './vortex-crnd-logs/vortex-crnd-logs.component';
import { OilBath1CrndLogsComponent } from './oil-bath1-crnd-logs/oil-bath1-crnd-logs.component';
import { OilBath2CrndLogsComponent } from './oil-bath2-crnd-logs/oil-bath2-crnd-logs.component';
import { Stirrer1CrndLogsComponent } from './stirrer1-crnd-logs/stirrer1-crnd-logs.component';
import { Stirrer2CrndLogsComponent } from './stirrer2-crnd-logs/stirrer2-crnd-logs.component';
import { Autoclave1LogsComponent } from './autoclave1-logs/autoclave1-logs.component';
import { Autoclave2LogsComponent } from './autoclave2-logs/autoclave2-logs.component';
import { Centrifuge1BpLogsComponent } from './centrifuge1-bp-logs/centrifuge1-bp-logs.component';
import { DeepFreezerMinus20c1BpLogsComponent } from './deep-freezer-minus20c1-bp-logs/deep-freezer-minus20c1-bp-logs.component';
import { EutechPh1BpLogsComponent } from './eutech-ph1-bp-logs/eutech-ph1-bp-logs.component';
import { EutechPh2MrndLogsComponent } from './eutech-ph2-mrnd-logs/eutech-ph2-mrnd-logs.component';
import { FumeHoodCrndLogsComponent } from './fume-hood-crnd-logs/fume-hood-crnd-logs.component';
import { Incubator1MrndLogsComponent } from './incubator1-mrnd-logs/incubator1-mrnd-logs.component';
import { LaminarAirflowChamper1BpLogsComponent } from './laminar-airflow-champer1-bp-logs/laminar-airflow-champer1-bp-logs.component';
import { LaminarAirflowChamper2MrndLogsComponent } from './laminar-airflow-champer2-mrnd-logs/laminar-airflow-champer2-mrnd-logs.component';
import { HotAirOvenCrndLogsComponent } from './hot-air-oven-crnd-logs/hot-air-oven-crnd-logs.component';
import { KfTitratorQcLogsComponent } from './kf-titrator-qc-logs/kf-titrator-qc-logs.component';
import { HeatingMantleCrndLogsComponent } from './heating-mantle-crnd-logs/heating-mantle-crnd-logs.component';
import { Microscope1BpLogsComponent } from './microscope1-bp-logs/microscope1-bp-logs.component';
import { Microscope2BpLogsComponent } from './microscope2-bp-logs/microscope2-bp-logs.component';
import { Shaker1BpLogsComponent } from './shaker1-bp-logs/shaker1-bp-logs.component';
import { Shaker2BpLogsComponent } from './shaker2-bp-logs/shaker2-bp-logs.component';
import { Shaker3MrndLogsComponent } from './shaker3-mrnd-logs/shaker3-mrnd-logs.component';
import { UltrasonicCleanerCrndLogsComponent } from './ultrasonic-cleaner-crnd-logs/ultrasonic-cleaner-crnd-logs.component';
import { VacuumOvenCrndLogsComponent } from './vacuum-oven-crnd-logs/vacuum-oven-crnd-logs.component';
import { Fridge1BpLogsComponent } from './fridge1-bp-logs/fridge1-bp-logs.component';
import { HplcQcqaLogsComponent } from './hplc-qcqa-logs/hplc-qcqa-logs.component';
import { RotavaporCrndLogsComponent } from './rotavapor-crnd-logs/rotavapor-crnd-logs.component';
import { DataSheetComponent } from './data-sheet/data-sheet.component';
import { DailyWaterAnalysisTdsComponent } from './daily-water-analysis-tds/daily-water-analysis-tds.component';
import { EtpBatchWorkSheetComponent } from './etp-batch-work-sheet/etp-batch-work-sheet.component';
import { HouseKeepingRecordComponent } from './house-keeping-record/house-keeping-record.component';
import { QcMicrobiologyEnvironmentalTestingRecordComponent } from './qc-microbiology-environmental-testing-record/qc-microbiology-environmental-testing-record.component';
import { QcMicrobiologyLafTestingRecordComponent } from './qc-microbiology-laf-testing-record/qc-microbiology-laf-testing-record.component';
import { QcMicrobiologyMicrobialTestingRecordComponent } from './qc-microbiology-microbial-testing-record/qc-microbiology-microbial-testing-record.component';
import { QcMicrobiologyOilTestingRecordComponent } from './qc-microbiology-oil-testing-record/qc-microbiology-oil-testing-record.component';
import { QcMicrobiologyWaterTestingRecordComponent } from './qc-microbiology-water-testing-record/qc-microbiology-water-testing-record.component';
import { EtpPlantDailyMaintenanceSheetComponent } from './etp-plant-daily-maintenance-sheet/etp-plant-daily-maintenance-sheet.component';
@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    PrimasToolBarComponent,
    WeighingBalance1BpLogsComponent,
    WeighingBalance2CrndLogsComponent,
    WeighingBalance3ProdLogsComponent,
    WeighingBalance4ProdLogsComponent,
    VortexCrndLogsComponent,
    OilBath1CrndLogsComponent,
    OilBath2CrndLogsComponent,
    Stirrer1CrndLogsComponent,
    Stirrer2CrndLogsComponent,
    Autoclave1LogsComponent,
    Autoclave2LogsComponent,
    Centrifuge1BpLogsComponent,
    DeepFreezerMinus20c1BpLogsComponent,
    EutechPh1BpLogsComponent,
    EutechPh2MrndLogsComponent,
    FumeHoodCrndLogsComponent,
    Incubator1MrndLogsComponent,
    LaminarAirflowChamper1BpLogsComponent,
    LaminarAirflowChamper2MrndLogsComponent,
    HotAirOvenCrndLogsComponent,
    KfTitratorQcLogsComponent,
    HeatingMantleCrndLogsComponent,
    Microscope1BpLogsComponent,
    Microscope2BpLogsComponent,
    Shaker1BpLogsComponent,
    Shaker2BpLogsComponent,
    Shaker3MrndLogsComponent,
    UltrasonicCleanerCrndLogsComponent,
    VacuumOvenCrndLogsComponent,
    Fridge1BpLogsComponent,
    HplcQcqaLogsComponent,
    RotavaporCrndLogsComponent,
    //Data Sheet Starts From Here
    DataSheetComponent,
    DailyWaterAnalysisTdsComponent,
    EtpBatchWorkSheetComponent,
    HouseKeepingRecordComponent,
    QcMicrobiologyEnvironmentalTestingRecordComponent,
    QcMicrobiologyLafTestingRecordComponent,
    QcMicrobiologyMicrobialTestingRecordComponent,
    QcMicrobiologyOilTestingRecordComponent,
    QcMicrobiologyWaterTestingRecordComponent,
    EtpPlantDailyMaintenanceSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule, 
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    NgxMaterialTimepickerModule.setOpts('ar-AE', 'arab')
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
