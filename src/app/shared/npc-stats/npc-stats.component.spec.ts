import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcStatsComponent } from './npc-stats.component';

describe('NpcStatsComponent', () => {
  let component: NpcStatsComponent;
  let fixture: ComponentFixture<NpcStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
