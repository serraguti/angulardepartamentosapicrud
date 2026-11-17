import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeDepartamentosComponent } from './home-departamentos-component';

describe('HomeDepartamentosComponent', () => {
  let component: HomeDepartamentosComponent;
  let fixture: ComponentFixture<HomeDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeDepartamentosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeDepartamentosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
