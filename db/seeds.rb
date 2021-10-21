# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Page.destroy_all
Block.destroy_all

user_1 = User.create!(
  first_name: 'Doug',
  last_name: 'Engelbart',
  email: 'doug@engelbart.com',
  password: 'password'
)

user_2 = User.create!(
  first_name: 'Ted',
  last_name: 'Nelson',
  email: 'ted@nelson.com',
  password: 'password'
)

user_3 = User.create!(
  first_name: 'Ada',
  last_name: 'Lovelace',
  email: 'ada@lovelace.com',
  password: 'password'
)

user_4 = User.create!(
  first_name: 'Alan',
  last_name: 'Kay',
  email: 'alan@kay.com',
  password: 'password'
)

user_5 = User.create!(
  first_name: 'Alan',
  last_name: 'Turing',
  email: 'alan@turing.com',
  password: 'password'
)

user_6 = User.create!(
  first_name: 'Steve',
  last_name: 'Jobs',
  email: 'steve@jobs.com',
  password: 'password'
)


# Add demo pages

page_1 = Page.create!(
  user_id: user_1.id,
  title: 'This is a page',
  gallery_image_url: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/solid-blue.png',
  icon: '✋'
)

page_2 = Page.create!(
  user_id: user_1.id,
  title: 'This is a second page',
  gallery_image_url: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/gradient-8.png '
)

page_3 = Page.create!(
  user_id: user_1.id,
  title: 'This is a third page',
  gallery_image_url: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/nasa-the-blue-marble.jpeg'
)

# Add demo blocks

block_1 = Block.create!({
  page_id: page_1.id,
  block_type: 'paragraph',
  text: 'This is some paragraph'
})

block_2 = Block.create!({
  page_id: page_1.id,
  block_type: 'paragraph',
  text: 'At first, books were copied mostly in monasteries, one at a time. With the rise of universities in the 13th century, the Manuscript culture of the time led to an increase in the demand for books, and a new system for copying books appeared. The books were divided into unbound leaves (pecia), which were lent out to different copyists, so the speed of book production was considerably increased. The system was maintained by secular stationers guilds, which produced both religious and non-religious material.'
})

block_3 = Block.create!({
  page_id: page_1.id,
  block_type: 'paragraph',
  text: 'Judaism has kept the art of the scribe alive up to the present. According to Jewish tradition, the Torah scroll placed in a synagogue must be written by hand on parchment and a printed book would not do, though the congregation may use printed prayer books and printed copies of the Scriptures are used for study outside the synagogue. A sofer "scribe" is a highly respected member of any observant Jewish community.'
})

block_4 = Block.create!({
  page_id: page_1.id,
  block_type: 'paragraph',
  text: 'The Chinese inventor Bi Sheng made movable type of earthenware c. 1045, but there are no known surviving examples of his printing. Around 1450, in what is commonly regarded as an independent invention, Johannes Gutenberg invented movable type in Europe, along with innovations in casting the type based on a matrix and hand mould. This invention gradually made books less expensive to produce, and more widely available.'
})

block_5 = Block.create!({
  page_id: page_1.id,
  block_type: 'paragraph',
  text: 'Early printed books, single sheets and images which were created before 1501 in Europe are known as incunables or incunabula. "A man born in 1453, the year of the fall of Constantinople, could look back from his fiftieth year on a lifetime in which about eight million books had been printed, more perhaps than all the scribes of Europe had produced since Constantine founded his city in AD 330."'
})

block_6 = Block.create!({
  page_id: page_1.id,
  block_type: 'paragraph',
  text: 'The codices of pre-Columbian Mesoamerica (Mexico and Central America) had the same form as the European codex, but were instead made with long folded strips of either fig bark (amatl) or plant fibers, often with a layer of whitewash applied before writing. New World codices were written as late as the 16th century (see Maya codices and Aztec codices). Those written before the Spanish conquests seem all to have been single long sheets folded concertina-style, sometimes written on both sides of the local amatl paper.'
})

page_1.block_ids = [
  block_1.id,
  block_2.id,
  block_3.id,
  block_4.id,
  block_5.id,
  block_6.id
]


block_7 = Block.create!({
  page_id: page_2.id,
  block_type: 'paragraph',
  text: 'Early printed books, single sheets and images which were created before 1501 in Europe are known as incunables or incunabula. "A man born in 1453, the year of the fall of Constantinople, could look back from his fiftieth year on a lifetime in which about eight million books had been printed, more perhaps than all the scribes of Europe had produced since Constantine founded his city in AD 330."'
})

block_8 = Block.create!({
  page_id: page_2.id,
  block_type: 'paragraph',
  text: 'The codices of pre-Columbian Mesoamerica (Mexico and Central America) had the same form as the European codex, but were instead made with long folded strips of either fig bark (amatl) or plant fibers, often with a layer of whitewash applied before writing. New World codices were written as late as the 16th century (see Maya codices and Aztec codices). Those written before the Spanish conquests seem all to have been single long sheets folded concertina-style, sometimes written on both sides of the local amatl paper.'
})

page_2.block_ids = [
  block_7.id,
  block_8.id
]
block_9 = Block.create!({
  page_id: page_3.id,
  block_type: 'h1',
  text: 'Heading One'
})

block_10 = Block.create!({
  page_id: page_3.id,
  block_type: 'paragraph',
  text: 'Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.'
})

block_11 = Block.create!({
  page_id: page_3.id,
  block_type: 'quote',
  text: 'Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.'
})

block_12 = Block.create!({
  page_id: page_3.id,
  block_type: 'h2',
  text: 'Heading Two'
})

block_13 = Block.create!({
  page_id: page_3.id,
  block_type: 'paragraph',
  text: 'Ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum.'
})

block_14 = Block.create!({
  page_id: page_3.id,
  block_type: 'h3',
  text: 'Heading Three'
})

block_15 = Block.create!({
  page_id: page_3.id,
  block_type: 'paragraph',
  text: 'Dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor.'
})

page_3.block_ids = [
  block_9.id,
  block_10.id,
  block_11.id,
  block_12.id,
  block_13.id,
  block_14.id,
  block_15.id,
]
