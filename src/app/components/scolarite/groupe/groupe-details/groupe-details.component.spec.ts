import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeDetailsComponent } from './groupe-details.component';

describe('GroupeDetailsComponent', () => {
  let component: GroupeDetailsComponent;
  let fixture: ComponentFixture<GroupeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
