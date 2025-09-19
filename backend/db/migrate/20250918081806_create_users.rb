class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.date   :birthdate
      t.string :gender
      t.string :address
      t.timestamps
    end
  end
end
