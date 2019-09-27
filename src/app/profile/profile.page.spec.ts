import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { profile1Page } from './profile1.page';

describe('profile1Page', () => {
  let component: profile1Page;
  let fixture: ComponentFixture<profile1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [profile1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(profile1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
