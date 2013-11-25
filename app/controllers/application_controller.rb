class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  if Rails.env == 'staging' or Rails.env == 'production'
    http_basic_authenticate_with name: ENV['user'], password: ENV['password']
  end
end
