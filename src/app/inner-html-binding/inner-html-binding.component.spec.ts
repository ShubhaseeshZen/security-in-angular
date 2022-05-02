import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerHTMLBindingComponent } from './inner-html-binding.component';

describe('InnerHTMLBindingComponent', () => {
  let component: InnerHTMLBindingComponent;
  let fixture: ComponentFixture<InnerHTMLBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerHTMLBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerHTMLBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
