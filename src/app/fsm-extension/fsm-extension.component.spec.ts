import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsmExtensionComponent } from './fsm-extension.component';

describe('FsmExtensionComponent', () => {
  let component: FsmExtensionComponent;
  let fixture: ComponentFixture<FsmExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsmExtensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsmExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
