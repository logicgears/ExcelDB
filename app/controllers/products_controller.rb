class ProductsController < ApplicationController
  before_filter :require_user
  # GET /products
  # GET /products.xml
  #  def index
  #    @products = Product.all
  #
  #    respond_to do |format|
  #      format.html # index.html.erb
  #      format.xml  { render :xml => @products }
  #    end
  #  end

  # GET /products/1
  # GET /products/1.xml
  def show
    @consumer = Consumer.find(params[:consumer_id])
    @product = Product.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @product }
    end
  end

  # GET /products/new
  # GET /products/new.xml
  def new
    @consumer = Consumer.find(params[:consumer_id])
    @product = Product.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  # { render :xml => @product }
    end
  end

  # GET /products/1/edit
  def edit
    @consumer = Consumer.find_by_id(params[:consumer_id])
    @product = Product.find(params[:id])
    respond_to do |format|
      format.html
    end
  end

  # POST /products
  # POST /products.xml
  def create
    @consumer = Consumer.find(params[:consumer_id])
    @product = @consumer.products.create!(params[:product])
    #@product = Product.new(params[:product])

    respond_to do |format|
      if @product.save
        format.html { redirect_to(@consumer, :notice => 'Product was successfully created.') }
        format.xml  { render :xml => @consumer, :status => :created }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @consumer.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /products/1
  # PUT /products/1.xml
  def update
    @consumer = Consumer.find(params[:consumer_id])
    @product = Product.find(params[:id])

    respond_to do |format|
      if @product.update_attributes(params[:product])
        format.html { redirect_to(@consumer, :notice => 'Product was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @consumer.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /products/1
  # DELETE /products/1.xml
  def destroy
    @consumer = Consumer.find(params[:consumer_id])
    @product = Product.find(params[:id])
    @product.destroy

    respond_to do |format|
      format.html { redirect_to(@consumer, :notice => 'Product was deleted.') }
      format.xml  { head :ok }
    end
  end
end
