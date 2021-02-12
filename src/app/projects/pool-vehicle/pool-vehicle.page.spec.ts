import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoolVehiclePage } from './pool-vehicle.page';

describe('PoolVehiclePage', () => {
  let component: PoolVehiclePage;
  let fixture: ComponentFixture<PoolVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoolVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
