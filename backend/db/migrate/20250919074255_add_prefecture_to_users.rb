class AddPrefectureToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :prefecture, :string
  end
end
