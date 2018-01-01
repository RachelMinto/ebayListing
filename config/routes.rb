Rails.application.routes.draw do
  get 'users/new'

  get 'users/delete'

  get 'users/edit'

  root to: 'home#index'
end