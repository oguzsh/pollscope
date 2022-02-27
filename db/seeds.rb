# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

50.times do
  User.create(name: Faker::Name.name, email: Faker::Internet.email)
end

5.times do
  poll = Poll.create(question: Faker::Lorem.question, user: User.find(rand(1..50)))
  4.times do
    poll.choices.create(choice_text: Faker::Lorem.sentence(word_count: 3))
  end
end

100.times do
  poll = Poll.find(rand(1..5))
  Vote.create(user: User.find(rand(1..50)), poll: poll, choice: poll.choices.sample)
end
