import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteRoutingComponent } from './delete-routing-component';

describe('DeleteRoutingComponent', () => {
  let component: DeleteRoutingComponent;
  let fixture: ComponentFixture<DeleteRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteRoutingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteRoutingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
