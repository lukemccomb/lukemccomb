require 'rails_helper'

feature "User visits photo page" do
  scenario "successfully" do
    visit root_path
    click_on "Photography"
    expect(page).to have_css 'h1', text: 'Photography'
  end
end
