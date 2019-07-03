import { NgModule } from '@angular/core';

import { JhipOtokabeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipOtokabeSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipOtokabeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipOtokabeSharedCommonModule {}
