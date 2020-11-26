import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextContentComponent } from './context-content.component';

describe('ContextContentComponent', () => {
  let component: ContextContentComponent;
  let fixture: ComponentFixture<ContextContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
