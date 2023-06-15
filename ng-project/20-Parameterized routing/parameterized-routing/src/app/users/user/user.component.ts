import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user!: { id: number; name: string };
  routeParameterSubscription!: Subscription;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name'],
    };
    this.routeParameterSubscription = this.activatedRoute.params.subscribe(
      (param: Params) => {
        (this.user.id = param['id']), (this.user.name = param['name']);
      }
    );
  }
  ngOnDestroy(): void {
    this.routeParameterSubscription.unsubscribe();
  }
  goToCharles() {
    this.router.navigate(['/users', 2, 'Charles'], {
      queryParams: { isAdmin: false },
    });
  }
}
