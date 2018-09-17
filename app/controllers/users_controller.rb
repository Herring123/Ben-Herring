class UsersController < ApplicationController

   def index
    @projects = Project.all
    # render 'projects/index'
     # render 'projects/index'
    # @users = User.where.not(latitude: nil, longitude: nil)

    # @markers = @users.map do |user|
    #   {
    #     lat: user.latitude,
    #     lng: user.longitude,
    #     icon: "images/orangepin.png"
    #     # infoWindow: { content: render_to_string(partial: "/flats/map_box", locals: { flat: flat }) }
    #   }
    end
  end

