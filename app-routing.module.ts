import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log/log.component';
import { WeighingBalance1BpLogsComponent } from './weighing-balance1-bp-logs/weighing-balance1-bp-logs.component';
import { WeighingBalance2CrndLogsComponent } from './weighing-balance2-crnd-logs/weighing-balance2-crnd-logs.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'Log', pathMatch: 'full'},
  { path: 'log', component: LogComponent },
  { path: 'weighingBalance1BpLogs', component: WeighingBalance1BpLogsComponent},
  { path: 'weighingBalance2CrndLogs', component: WeighingBalance2CrndLogsComponent},
  { path: 'weighingBalance3ProdLogs', component: WeighingBalance3ProdLogsComponent},
  { path: 'weighingBalance4ProdLogs', component: WeighingBalance4ProdLogsComponent},
  { path: 'vortexCrndLogs', component: VortexCrndLogsComponent},
  { path: 'oilBath1CrndLogs', component: OilBath1CrndLogsComponent},
  { path: 'oilBath2CrndLogs', component: OilBath2CrndLogsComponent},
  { path: 'stirrer1CrndLogs', component: Stirrer1CrndLogsComponent},
  { path: 'stirrer2CrndLogs', component: Stirrer2CrndLogsComponent},
  { path: 'autoclave1Logs', component: Autoclave1LogsComponent},
  { path: 'autoclave2Logs', component: Autoclave2LogsComponent},
  { path: 'centrifuge1BpLogs', component: Centrifuge1BpLogsComponent},
  { path: 'deepFreezerMinus20C1BpLogs', component: DeepFreezerMinus20c1BpLogsComponent},
  { path: 'eutechPh1BpLogs', component: EutechPh1BpLogsComponent},
  { path: 'eutechPh2MrndLogs', component: EutechPh2MrndLogsComponent},
  { path: 'fumeHoodCrndLogs', component: FumeHoodCrndLogsComponent},
  { path: 'incubator1MrndLogs', component: Incubator1MrndLogsComponent},
  { path: 'laminarAirFlowChamper1BpLogs', component: LaminarAirflowChamper1BpLogsComponent},
  { path: 'laminarAirFlowChamper2MrndLogs', component: LaminarAirflowChamper2MrndLogsComponent},
  { path: 'hotAirOvenCrndLogs', component: HotAirOvenCrndLogsComponent},
  { path: 'kfTitratorQcLogs', component: KfTitratorQcLogsComponent},
  { path: 'heatingMantleCrndLogs', component: HeatingMantleCrndLogsComponent},
  { path: 'microscope1BpLogs', component: Microscope1BpLogsComponent},
  { path: 'microscope2BpLogs', component: Microscope2BpLogsComponent},
  { path: 'shaker1BpLogs', component: Shaker1BpLogsComponent},
  { path: 'shaker2BpLogs', component: Shaker2BpLogsComponent},
  { path: 'shaker3MrndLogs', component: Shaker3MrndLogsComponent},
  { path: 'ultrasonicCleanerCrndLogs', component: UltrasonicCleanerCrndLogsComponent},
  { path: 'vacuumOvenCrndLogs', component: VacuumOvenCrndLogsComponent},
  { path: 'fridge1BpLogs', component: Fridge1BpLogsComponent},
  { path: 'hplcQcqaLogs', component: HplcQcqaLogsComponent},
  { path: 'rotavaporCrndLogs', component: RotavaporCrndLogsComponent},
  //Data Sheet Starts From Here
  { path: 'dataSheet', component: DataSheetComponent },
  { path: 'dailyWaterAnalysisTds', component: DailyWaterAnalysisTdsComponent },
  { path: 'etpBatchWorkSheet', component: EtpBatchWorkSheetComponent },
  { path: 'houseKeepingRecord', component: HouseKeepingRecordComponent },
  { path: 'qcMicrobiologyEnvironmentalTestingRecord', component: QcMicrobiologyEnvironmentalTestingRecordComponent },
  { path: 'qcMicrobiologyLafTestingRecord', component: QcMicrobiologyLafTestingRecordComponent },
  { path: 'qcMicrobiologyMicrobialTestingRecord', component: QcMicrobiologyMicrobialTestingRecordComponent },
  { path: 'qcMicrobiologyOilTestingRecord', component: QcMicrobiologyOilTestingRecordComponent },
  { path: 'qcMicrobiologyWaterTestingRecord', component: QcMicrobiologyWaterTestingRecordComponent },
  { path: 'etpPlantDailyMaintenanceSheet', component: EtpPlantDailyMaintenanceSheetComponent }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
