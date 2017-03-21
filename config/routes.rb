Rails.application.routes.draw do

  root to: 'main#index'

  resource :main, only: [:index]

  get "photo" => "photos#index"

end
