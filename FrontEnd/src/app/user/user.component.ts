import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { ApiService } from '../api.service'

interface usuario {
  data: {
    id: Number
    email: String
    first_name: String
    last_name: String
    avatar: String
  }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [
    './user.component.css'
  ]
})
export class UserComponent implements OnInit {
  public UserData: usuario = null

  constructor (private API: ApiService, private router: Router, private activated: ActivatedRoute) {}

  ngOnInit () {
    this.loadUser()
  }

  loadUser () {
    this.API.GetUser(this.activated.snapshot.params.id).subscribe((res) => {
      if (res != undefined) {
        this.UserData = res
      }
    })
  }

  backToList () {
    this.router.navigateByUrl('/list')
  }
}
