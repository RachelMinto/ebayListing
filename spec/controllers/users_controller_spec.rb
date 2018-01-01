describe 'POST create' do
  context "with valid inputs" do
    before { post :create, { :user => Fabricate.attributes_for(:user, first_name: 'Alice') } }

    it "sets @user" do
      expect(assigns(:user)).to be_instance_of(User)
    end

    it "creates a new user" do
      expect(User.count).to eq(1)
    end

    it "redirects to user#new" do
      expect(response).to redirect_to(root_path)
    end
  end

  context "with invalid inputs" do
    before { post :create, { :user => { email: 'something@gmail.com' } } }

    it "does not create a new user" do
      expect(User.count).to eq(0)
    end
  end
end
