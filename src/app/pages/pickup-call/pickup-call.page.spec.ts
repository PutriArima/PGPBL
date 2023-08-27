import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PickupCallPage } from './pickup-call.page';
import { Router } from '@angular/router';
import { PickupCallsPage } from '../pickup-calls/pickup-calls.page';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations:[PickupCallsPage],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    })
    fixture = TestBed.createComponent(PickupCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home on new pickup call', () => {
    spyOn(router, 'navigate');

    component.newPickupCall;

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
