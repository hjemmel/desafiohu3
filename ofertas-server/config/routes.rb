Rails.application.routes.draw do

  resources :hotels, only: [ :index, :show ] do
    resources :offers, only: [:index]
  end

end
