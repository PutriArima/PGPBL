import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PickupCallsPage } from './pickup-calls.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('PickupCallsPage', () => {
  let component: PickupCallsPage;
  let fixture: ComponentFixture<PickupCallsPage>;

  beforeEach(waitForAsync(() => {

    fixture = TestBed.createComponent(PickupCallsPage);
    component = fixture.componentInstance;
    
  }));


});
