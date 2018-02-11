import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicebarComponent } from './slicebar.component';

describe('SlicebarComponent', () => {
  let component: SlicebarComponent;
  let fixture: ComponentFixture<SlicebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlicebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlicebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
