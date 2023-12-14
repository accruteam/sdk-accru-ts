export interface GetCustomersRequest {
  name?: String,
  after?: String,
  before?: String,
  first?: String,
  last?: String,
  skip?: Number,
  take?: Number,
  organizationId?: String,
}