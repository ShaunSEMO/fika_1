import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseRoutePage } from './choose-route.page';

describe('ChooseRoutePage', () => {
  let component: ChooseRoutePage;
  let fixture: ComponentFixture<ChooseRoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseRoutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
