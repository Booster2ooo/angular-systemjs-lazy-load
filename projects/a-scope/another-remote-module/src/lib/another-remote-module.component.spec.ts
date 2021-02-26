import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherRemoteModuleComponent } from './another-remote-module.component';

describe('AnotherRemoteModuleComponent', () => {
  let component: AnotherRemoteModuleComponent;
  let fixture: ComponentFixture<AnotherRemoteModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherRemoteModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherRemoteModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
