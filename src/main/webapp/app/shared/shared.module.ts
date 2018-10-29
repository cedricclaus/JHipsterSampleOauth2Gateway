import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { JHipsterSampleOauth2GatewaySharedLibsModule, JHipsterSampleOauth2GatewaySharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [JHipsterSampleOauth2GatewaySharedLibsModule, JHipsterSampleOauth2GatewaySharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [JHipsterSampleOauth2GatewaySharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterSampleOauth2GatewaySharedModule {}
