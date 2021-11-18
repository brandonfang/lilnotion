Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :destroy] do
      resources :blocks, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :blocks, only: [:index, :create, :show, :update, :destroy]
    resources :pages, only: [:create, :index, :show, :update, :destroy] do
      resources :blocks, only: [:index]
    end
  end

  root to: "static_pages#root"
end