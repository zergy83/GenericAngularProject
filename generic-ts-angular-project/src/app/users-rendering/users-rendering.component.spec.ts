import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRenderingComponent } from './users-rendering.component';

describe('UsersRenderingComponent', () => {
  let component: UsersRenderingComponent;
  let fixture: ComponentFixture<UsersRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersRenderingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
