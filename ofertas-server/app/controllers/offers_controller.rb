class OffersController < ApplicationController

  def index
    id = params[:hotel_id].to_i
    days = params[:days].to_i
    from = params[:from].to_s

    options = @data.find { |item| item["id"] == id }["options"].sort_by { |item| item["price"] }

    if days>0
      options = options.select { |item| (item["daily"] == days) }
    end

    if !from.empty?
      options = options.select { |item| item["from"].include?(from) }
    end

    render json: options;
  end

end
