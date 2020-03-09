import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { ApiService } from '../api.service'

interface respuesta {
  page: Number
  per_page: Number
  total: Number
  total_pages: Number
  data: []
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [
    './user-list.component.css'
  ]
})
export class UserListComponent implements OnInit {
  public UserData: respuesta = null
  public page1: respuesta = null
  public page2: respuesta = null

  private page = 1

  constructor (private API: ApiService, private router: Router) {}

  ngOnInit () {
    this.loadUsers()
  }

  pageChange (page) {
    this.page = page
    if (this.page == 1) {
      this.UserData = this.page1
    } else if (this.page == 2) {
      this.UserData = this.page2
    } else {
      this.UserData = this.page1
    }
  }

  loadUsers () {
    this.API.GetUsersPage1().subscribe((res) => {
      this.page1 = res
      this.UserData = this.page1
    })

    this.API.GetUsersPage2().subscribe((res) => {
      this.page2 = res
    })
  }

  selectedUser (id) {
    this.router.navigateByUrl(`/user/${id}`)
  }
}
