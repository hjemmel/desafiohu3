class HotelsController < ApplicationController

  def initialize
    file = File.read(
        'app/assets/offer.json',
        external_encoding: 'iso-8859-1')

    @data = JSON.parse(file)
  end

  def index
    render json: @data.to_json(:except => ["photos", "options"]);
  end

  def show
    id = params[:id].to_i

    render json: @data.find {|item| item["id"] == id }.to_json(:except => ["options"]);
  end

end
