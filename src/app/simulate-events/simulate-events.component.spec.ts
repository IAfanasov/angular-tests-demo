import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SimulateEventsComponent } from './simulate-events.component';

fdescribe('SimulateEventsComponent', () => {
  let component: SimulateEventsComponent;
  let fixture: ComponentFixture<SimulateEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimulateEventsComponent]
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(SimulateEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenRenderingDone();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change text to "clicked" when innerDiv clicked', () => {
    const innerDivDebugElement = fixture.debugElement.query(By.css('.innerDiv'));
    const innerDivElement = <HTMLDivElement> innerDivDebugElement.nativeElement;

    innerDivElement.click();
    fixture.detectChanges();

    expect(innerDivElement.textContent).toEqual('clicked');
  });

  it('should change text to "clicked" when innerDiv clicked', () => {
    const innerDivDebugElement = fixture.debugElement.query(By.css('.innerDiv'));
    const innerDivElement = <HTMLDivElement> innerDivDebugElement.nativeElement;

    innerDivElement.dispatchEvent(new Event('click', { bubbles: true }));
    fixture.detectChanges();

    expect(innerDivElement.textContent).toEqual('clicked');
  });

  it('should NOT change text to "clicked" when innerDiv clicked event simulated', () => {
    const innerDivDebugElement = fixture.debugElement.query(By.css('.innerDiv'));

    innerDivDebugElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(innerDivDebugElement.nativeElement.textContent).toEqual('before click');
  });

  it('should change text to "clicked" when parentDiv clicked event simulated', () => {
    const parentDivDebugElement = fixture.debugElement.query(By.css('.parentDiv'));

    parentDivDebugElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    const innerDivDebugElement = fixture.debugElement.query(By.css('.innerDiv'));
    expect(innerDivDebugElement.nativeElement.textContent).toEqual('clicked');
  });
});
