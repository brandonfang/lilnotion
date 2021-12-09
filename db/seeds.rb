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
  title: "Do things that don't scale",
  gallery_image_url: '',
)

page_2 = Page.create!(
  user_id: user_1.id,
  title: 'This is a second page',
  gallery_image_url: '',
)

page_3 = Page.create!(
  user_id: user_1.id,
  title: 'This is a third page',
  gallery_image_url: '',
)

page_4 = Page.create!(
  user_id: user_2.id,
  title: 'This page belongs to Ted',
  gallery_image_url: '',
)

page_5 = Page.create!(
  user_id: user_3.id,
  title: 'This page belongs to Ada',
  gallery_image_url: '',
)


# Add demo blocks

block_1 = Block.create!({
  user_id: user_1.id,
  page_id: page_1.id,
  block_type: 'paragraph',
  text: "One of the most common types of advice we give at Y Combinator is to do things that don't scale. A lot of would-be founders believe that startups either take off or don't. You build something, make it available, and if you've made a better mousetrap, people beat a path to your door as promised. Or they don't, in which case the market must not exist."
})

block_2 = Block.create!({
  user_id: user_1.id,
  page_id: page_1.id,
  block_type: 'paragraph',
  text: "Actually startups take off because the founders make them take off. There may be a handful that just grew by themselves, but usually it takes some sort of push to get them going. A good metaphor would be the cranks that car engines had before they got electric starters. Once the engine was going, it would keep going, but there was a separate and laborious process to get it going."
})

block_3 = Block.create!({
  user_id: user_1.id,
  page_id: page_1.id,
  block_type: 'h2',
  text: "Recruiting"
})

block_4 = Block.create!({
  user_id: user_1.id,
  page_id: page_1.id,
  block_type: 'paragraph',
  text: "The most common unscalable thing founders have to do at the start is to recruit users manually. Nearly all startups have to. You can't wait for users to come to you. You have to go out and get them."
})

block_5 = Block.create!({
  user_id: user_1.id,
  page_id: page_1.id,
  block_type: 'paragraph',
  text: "Stripe is one of the most successful startups we've funded, and the problem they solved was an urgent one. If anyone could have sat back and waited for users, it was Stripe. But in fact they're famous within YC for aggressive early user acquisition."
})

block_6 = Block.create!({
  user_id: user_1.id,
  page_id: page_1.id,
  block_type: 'paragraph',
  text: "Startups building things for other startups have a big pool of potential users in the other companies we've funded, and none took better advantage of it than Stripe. At YC we use the term \"Collison installation\" for the technique they invented. More diffident founders ask \"Will you try our beta?\" and if the answer is yes, they say \"Great, we'll send you a link.\" But the Collison brothers weren't going to wait. When anyone agreed to try Stripe they'd say \"Right then, give me your laptop\" and set them up on the spot."
})

block_7 = Block.create!({
  user_id: user_1.id,
  page_id: page_2.id,
  block_type: 'paragraph',
  text: 'Early printed books, single sheets and images which were created before 1501 in Europe are known as incunables or incunabula. "A man born in 1453, the year of the fall of Constantinople, could look back from his fiftieth year on a lifetime in which about eight million books had been printed, more perhaps than all the scribes of Europe had produced since Constantine founded his city in AD 330."'
})

block_8 = Block.create!({
  user_id: user_1.id,
  page_id: page_2.id,
  block_type: 'paragraph',
  text: 'The codices of pre-Columbian Mesoamerica (Mexico and Central America) had the same form as the European codex, but were instead made with long folded strips of either fig bark (amatl) or plant fibers, often with a layer of whitewash applied before writing. New World codices were written as late as the 16th century (see Maya codices and Aztec codices). Those written before the Spanish conquests seem all to have been single long sheets folded concertina-style, sometimes written on both sides of the local amatl paper.'
})

block_9 = Block.create!({
  user_id: user_1.id,
  page_id: page_3.id,
  block_type: 'h1',
  text: 'Heading One'
})

block_10 = Block.create!({
  user_id: user_1.id,
  page_id: page_3.id,
  block_type: 'paragraph',
  text: 'Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.'
})

block_11 = Block.create!({
  user_id: user_1.id,
  page_id: page_3.id,
  block_type: 'quote',
  text: 'Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.'
})

block_12 = Block.create!({
  user_id: user_1.id,
  page_id: page_3.id,
  block_type: 'h2',
  text: 'Heading Two'
})

block_13 = Block.create!({
  user_id: user_1.id,
  page_id: page_3.id,
  block_type: 'paragraph',
  text: 'Ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum.'
})

block_14 = Block.create!({
  user_id: user_1.id,
  page_id: page_3.id,
  block_type: 'h3',
  text: 'Heading Three'
})

block_15 = Block.create!({
  user_id: user_1.id,
  page_id: page_3.id,
  block_type: 'paragraph',
  text: 'Dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor.'
})

block_16 = Block.create!({
  user_id: user_2.id,
  page_id: page_4.id,
  block_type: 'paragraph',
  text: 'There is, however, something so mysterious in all you have seen or heard of this wretched man, that I am unwilling to stamp a bad impression of his character upon so slight and partial a knowledge of it. Where any thing is doubtful, the ties of society, and the laws of humanity, claim a favourable interpretation; but remember, my dear child, that those of discretion have an equal claim to your regard.

'
})

block_17 = Block.create!({
  user_id: user_2.id,
  page_id: page_4.id,
  block_type: 'paragraph',
  text: 'As to Sir Clement Willoughby, I know not how to express my indignation at his conduct. Insolence so insufferable, and the implication of suspicions so shocking, irritate me to a degree of wrath, which I hardly thought my almost worn-out passions were capable of again experiencing. You must converse with him no more: he imagines, from the pliability of your temper, that he may offend you with impunity; but his behaviour justifies, nay, calls for your avowed resentment; do not, therefore, hesitate in forbidding him your sight.'
})

block_18 = Block.create!({
  user_id: user_2.id,
  page_id: page_4.id,
  block_type: 'paragraph',
  text: 'The Branghtons, Mr. Smith, and young Brown, however ill-bred and disagreeable, are objects too contemptible for serious displeasure; yet I grieve much that my Evelina should be exposed to their rudeness and impertinence.'
})

block_19 = Block.create!({
  user_id: user_2.id,
  page_id: page_4.id,
  block_type: 'paragraph',
  text:  'The very day that this tedious month expires, I shall send Mrs. Clinton to town, who will accompany you to Howard Grove. Your stay there will, I hope, be short; for I feel daily an increasing impatience to fold my beloved child to my bosom! ARTHUR VILLARS.'
})

block_20 = Block.create!({
  user_id: user_3.id,
  page_id: page_5.id,
  block_type: 'paragraph',
  text: 'Monocle ipsum dolor sit amet flat white exquisite Lufthansa boutique Winkreative. Global ANA Asia-Pacific signature, K-pop elegant impeccable sleepy first-class destination conversation exclusive Lufthansa airport cosy. Helsinki espresso first-class K-pop cutting-edge sophisticated, flat white bespoke sharp. Handsome St Moritz boulevard, extraordinary Lufthansa alluring ryokan global wardrobe Helsinki joy Scandinavian discerning efficient. Baggu cosy craftsmanship, hand-crafted boutique sharp Boeing 787 intricate. Finest hub craftsmanship essential charming carefully curated. Helsinki Tsutaya iconic smart Comme des Garçons Boeing 787 Singapore artisanal boutique Shinkansen intricate hand-crafted extraordinary.'
})

block_21 = Block.create!({
  user_id: user_3.id,
  page_id: page_5.id,
  block_type: 'paragraph',
  text: 'Emerging ANA joy, sharp flat white signature hub charming bureaux remarkable vibrant Sunspel bespoke craftsmanship hand-crafted. Eclectic impeccable St Moritz concierge, cutting-edge airport classic premium Helsinki. Tote bag Winkreative charming handsome. Premium signature extraordinary lovely tote bag hand-crafted joy ryokan ANA Gaggenau sleepy, Comme des Garçons Sunspel. Comme des Garçons artisanal finest global, bespoke eclectic soft power cosy smart Toto remarkable ryokan. Exquisite joy Porter signature.'
})

block_22 = Block.create!({
  user_id: user_3.id,
  page_id: page_5.id,
  block_type: 'paragraph',
  text: 'Carefully curated sophisticated Shinkansen the highest quality Helsinki cosy. Porter airport classic liveable Scandinavian, alluring finest punctual Muji Boeing 787 Marylebone artisanal sleepy hand-crafted. Ryokan airport classic, destination finest Singapore boutique punctual delightful Swiss. Concierge Lufthansa Washlet classic bureaux intricate Scandinavian the best extraordinary. Marylebone classic Melbourne Boeing 787. Signature destination first-class Melbourne boulevard Airbus A380 boutique Ginza Asia-Pacific. Artisanal Baggu sleepy, cosy charming carefully curated soft power airport conversation.'
})

page_1.block_ids = [
  block_1.id,
  block_2.id,
  block_3.id,
  block_4.id,
  block_5.id,
  block_6.id
]

page_2.block_ids = [
  block_7.id,
  block_8.id
]

page_3.block_ids = [
  block_9.id,
  block_10.id,
  block_11.id,
  block_12.id,
  block_13.id,
  block_14.id,
  block_15.id,
]

page_4.block_ids = [
  block_16.id,
  block_17.id,
  block_18.id,
  block_19.id,
]

page_5.block_ids = [
  block_20.id,
  block_21.id,
  block_22.id,
]

# p('page_1', page_1.block_ids)
# p('page_2', page_2.block_ids)
# p('page_3', page_3.block_ids)