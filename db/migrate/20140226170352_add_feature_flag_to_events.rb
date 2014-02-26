class AddFeatureFlagToEvents < ActiveRecord::Migration
  def change
    add_column :events, :featured, :boolean
  end

  def self.down
    remove_column :events, :featured
  end
end
