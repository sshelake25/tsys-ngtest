import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightswitchComponent } from './lightswitch.component';

describe('LightswitchComponent', () => {
  let component: LightswitchComponent;
  let fixture: ComponentFixture<LightswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LightswitchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("should return 'The light is off'", () => {
    // fixture = TestBed.createComponent(LightswitchComponent);
    // component = fixture.componentInstance;
    expect(component.isOn).toBeFalsy();
    expect(component.message).toBe("The light is Off");
  })

  it("should return 'The light is On'", () => {
    // fixture = TestBed.createComponent(LightswitchComponent);
    // component = fixture.componentInstance;
    component.clicked();
    expect(component.isOn).toBeTruthy();
    expect(component.message).toBe("The light is On");
  });

  it("should return 'The light is off'", () => {
    // fixture = TestBed.createComponent(LightswitchComponent);
    // component = fixture.componentInstance;
    component.clicked();
    component.clicked();
    expect(component.message).toBe("The light is Off");
  })

});
