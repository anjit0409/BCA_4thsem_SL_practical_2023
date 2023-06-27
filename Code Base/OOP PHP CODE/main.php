<?php

class Product {
    private $name;
    private $price;
    private $quantity;

    public function __construct($name, $price, $quantity) {
        $this->name = $name;
        $this->price = $price;
        $this->quantity = $quantity;
    }

    public function getName() {
        return $this->name;
    }

    public function getPrice() {
        return $this->price;
    }

    public function getQuantity() {
        return $this->quantity;
    }
}

class ShoppingCart {
    private $products = [];

    public function addProduct(Product $product) {
        $this->products[] = $product;
    }

    public function removeProduct(Product $product) {
        $index = array_search($product, $this->products);
        if ($index !== false) {
            array_splice($this->products, $index, 1);
        }
    }

    public function calculateTotalCost() {
        $totalCost = 0;
        foreach ($this->products as $product) {
            $totalCost += $product->getPrice() * $product->getQuantity();
        }
        return $totalCost;
    }

    public function displayCartContents() {
        foreach ($this->products as $product) {
            echo "Name: " . $product->getName() . ", Price: " . $product->getPrice() . ", Quantity: " . $product->getQuantity() . "\n";
        }
    }
}

// Usage example
$product1 = new Product("iPhone", 999, 1);
$product2 = new Product("Headphones", 99, 2);

$cart = new ShoppingCart();
$cart->addProduct($product1);
$cart->addProduct($product2);

$cart->displayCartContents();
echo "Total cost: $" . $cart->calculateTotalCost();
