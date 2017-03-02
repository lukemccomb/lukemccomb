Rails.application.routes.draw do

  root 'main#index'

  get '/resume' => 'resume#index'

end
