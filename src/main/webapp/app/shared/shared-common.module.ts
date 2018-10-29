import { NgModule } from '@angular/core';

import { JHipsterSampleOauth2GatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JHipsterSampleOauth2GatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JHipsterSampleOauth2GatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JHipsterSampleOauth2GatewaySharedCommonModule {}
