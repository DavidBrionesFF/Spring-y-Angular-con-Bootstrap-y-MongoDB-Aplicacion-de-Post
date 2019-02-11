import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPostComponent } from './nuevo-post.component';

describe('NuevoPostComponent', () => {
  let component: NuevoPostComponent;
  let fixture: ComponentFixture<NuevoPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
