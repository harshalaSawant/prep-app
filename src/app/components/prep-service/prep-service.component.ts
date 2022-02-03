import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { Subscription } from "rxjs";
import { GenericResIF } from "src/app/interfaces/api-res-interface";
import { InjectableService } from "src/app/services/app-level-injectable.service";
import { WithoutInJectableService } from "src/app/services/without-injectable.service";

@Component({
  selector: 'app-service-test',
  templateUrl: './prep-service.component.html',
  styleUrls: ['./prep-service.component.scss'],
  providers: [
    {provide: WithoutInJectableService, useFactory: (http: HttpClient)=> new WithoutInJectableService(http), deps:[HttpClient]}]
})
export class PrepServiceComponent {

  withoutSub: Subscription = new Subscription();
  factorySerData: GenericResIF = { success: false, message: '', injectable: false};
  injectableSerData: GenericResIF = { success: false, message: '', injectable: false};

  constructor (private notInjectableService: WithoutInJectableService,
    private injectableService: InjectableService,
    private toastMsgService: MessageService) {}

  getDataFromWithoutInjectableSer() {
    this.withoutSub = this.notInjectableService.getDetails()
    .subscribe((data: any) => {
      if (data.success) {
        this.factorySerData = data;
        this.toastMsgService.add({summary: data.message, severity: 'success'});
      }
    });
  }
  getDataFromInjectableSer() {
    this.withoutSub = this.injectableService.getData()
    .subscribe((data: any) => {
      if (data.success) {
        this.injectableSerData = data;
        this.toastMsgService.add({summary: data.message, severity: 'success'});
      }
    });
  }
}