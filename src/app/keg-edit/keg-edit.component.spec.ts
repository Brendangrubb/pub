/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KegEditComponent } from './keg-edit.component';

describe('KegEditComponent', () => {
  let component: KegEditComponent;
  let fixture: ComponentFixture<KegEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
