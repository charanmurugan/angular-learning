import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesNgForVsForComponent } from './structural-directives-ng-for-vs-for.component';

describe('StructuralDirectivesNgForVsForComponent', () => {
  let component: StructuralDirectivesNgForVsForComponent;
  let fixture: ComponentFixture<StructuralDirectivesNgForVsForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectivesNgForVsForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectivesNgForVsForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
