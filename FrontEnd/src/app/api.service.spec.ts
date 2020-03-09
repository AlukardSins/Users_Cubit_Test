import { TestBed } from '@angular/core/testing'

import { ApiService } from './api.service'

describe('ApiService', () => {
  let service: ApiService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ApiService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should get page 1', () => {
    expect(service.GetUsersPage1()).toBeDefined()
  })
})