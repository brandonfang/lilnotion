# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
# Block.destroy_all

demo_user_1 = User.create!(
  first_name: 'Doug',
  last_name: 'Engelbart',
  email: 'doug@engelbart.com',
  password: 'password'
)

demo_user_2 = User.create!(
  first_name: 'Ted',
  last_name: 'Nelson',
  email: 'ted@nelson.com',
  password: 'password'
)

demo_user_3 = User.create!(
  first_name: 'Ada',
  last_name: 'Lovelace',
  email: 'ada@lovelace.com',
  password: 'password'
)

demo_user_4 = User.create!(
  first_name: 'Alan',
  last_name: 'Kay',
  email: 'alan@kay.com',
  password: 'password'
)

demo_user_5 = User.create!(
  first_name: 'Alan',
  last_name: 'Turing',
  email: 'alan@turing.com',
  password: 'password'
)

demo_user_6 = User.create!(
  first_name: 'Steve',
  last_name: 'Jobs',
  email: 'steve@jobs.com',
  password: 'password'
)


# Add demo pages

# demo_page_1 = Page.create!(
#   object: 'page',
#   parent: {
#     type: 'workspace',
#     workspace: true
#   },
#   properties: ,
#   children: ,
#   workspace_id: demo_workspace_1.id
# )








