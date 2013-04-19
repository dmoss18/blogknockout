class HomeController < ApplicationController
  def index
    #render "#{Rails.root}/app/views/templates/home.html.erb"
  end

  def remote_hit
    if access_allowed?
      set_access_control_headers
      head :ok
    else
      head :forbidden
    end
  end
end
