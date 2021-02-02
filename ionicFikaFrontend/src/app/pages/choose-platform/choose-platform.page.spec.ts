import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoosePlatformPage } from './choose-platform.page';

describe('ChoosePlatformPage', () => {
  let component: ChoosePlatformPage;
  let fixture: ComponentFixture<ChoosePlatformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosePlatformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoosePlatformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
