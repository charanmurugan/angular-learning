import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesNgIfVsIfComponent } from './structural-directives-ng-if-vs-if.component';

describe('StructuralDirectivesNgIfVsIfComponent', () => {
  let component: StructuralDirectivesNgIfVsIfComponent;
  let fixture: ComponentFixture<StructuralDirectivesNgIfVsIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectivesNgIfVsIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectivesNgIfVsIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
