import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARemoteModuleComponent } from './a-remote-module.component';

describe('ARemoteModuleComponent', () => {
  let component: ARemoteModuleComponent;
  let fixture: ComponentFixture<ARemoteModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ARemoteModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ARemoteModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
