# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(address: "2 priest end, thame")

Project.create(name: "Gimme Shelter", description: "A mobile website created a Le Wagon in a group. It enables someone to book a hostel bed for a homeless person that night and show nearby services.", photo: "gimme-shelter.png")
