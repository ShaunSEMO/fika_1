import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripDetsPage } from './trip-dets.page';

describe('TripDetsPage', () => {
  let component: TripDetsPage;
  let fixture: ComponentFixture<TripDetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripDetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TripDetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
