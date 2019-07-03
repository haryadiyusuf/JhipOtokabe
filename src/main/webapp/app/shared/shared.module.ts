import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipOtokabeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipOtokabeSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipOtokabeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipOtokabeSharedModule {
  static forRoot() {
    return {
      ngModule: JhipOtokabeSharedModule
    };
  }
}
