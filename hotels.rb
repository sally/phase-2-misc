#########################
# in app/models/user.rb #
#########################

class User < ActiveRecord::Base
  # If we don't put foreign_key: 'guest_id', then AR looks for user_id in the bookings table, which doesn't exist! yo
  has_many :bookings, foreign_key: 'guest_id'
  has_many :booked_rooms, through: :bookings, source: :room
  # source: :room singular, because (1) AR error said so, (2) look at Booking model - says belongs_to :room singular, and we're using this association to obtain the rooms

  has_many :booked_hotels, through: :booked_rooms, source: :hotel
end

############################
# in app/models/booking.rb #
############################

class Booking < ActiveRecord::Base
  # If we don't put class_name: 'User', then AR looks for a model called Guest which doesn't exist
  belongs_to :guest, class_name: 'User'

  belongs_to :room
  has_one :hotel, through: :room

  # Incorrect association to try to get booking.hotel to work:
  # belongs_to :hotel, through: :room
  # Reason: The belongs_to association CANNOT have the "through" option. However, "through" does work with the has_many association.
end

#########################
# in app/models/room.rb #
#########################

class Room < ActiveRecord::Base
  belongs_to :hotel
  has_many :bookings
end

##########################
# in app/models/hotel.rb #
##########################

class Hotel < ActiveRecord::Base
  has_many :rooms
  has_many :bookings, through: :rooms
  has_many :booked_guests, through: :bookings, source: :guest
end
