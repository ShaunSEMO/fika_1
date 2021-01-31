import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseStartDestPage } from './choose-start-dest.page';

describe('ChooseStartDestPage', () => {
  let component: ChooseStartDestPage;
  let fixture: ComponentFixture<ChooseStartDestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseStartDestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseStartDestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
