import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollableTablesComponent } from './rollable-tables.component';

describe('RollableTablesComponent', () => {
  let component: RollableTablesComponent;
  let fixture: ComponentFixture<RollableTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollableTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollableTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
