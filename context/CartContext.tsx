"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/dummyData";

export interface CartItem {
  id: string; // unique item id: variantId
  product: Product;
  variantTitle: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartItems: CartItem[];
  addToCart: (product: Product, variantId: string, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  cartCount: number;
  cartSubtotal: number;
  freeShippingThreshold: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Initialize with the 2 mock items from approved UI/UX when cart is empty
  useEffect(() => {
    const mockItems: CartItem[] = [
      {
        id: "var_stone_grey_hoodie",
        product: {
          id: "mock_hoodie",
          handle: "architectural-hoodie",
          title: "Architectural Hoodie",
          price: 220,
          description: "Organic cotton hoodie.",
          featuredImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGm8lNusMWOna8Fm3NS09Fbp-yPz_t2rKnog5ohauMKhgveNc6Qy6mD04X4qSjxG4niAr5AF9HOhzINTwBEkSdsrSS1WFYk53YYxQd1RpafzweW2remcSWfEVWKfdgDSru_7B7Q0r207rSPbkIwAxDyAqXZtjhIgBpiInwJZqKE35TTaTp7F3qAsYEKvOD_6uT2grj7Cn8ohL24CHuUUv6YpzgA6jtOBLDxMWGkAo5odeSHH4lgFE2NKk3SL7jacjunIruxAU3Tho",
          images: [],
          options: [],
          variants: [],
          tags: []
        },
        variantTitle: "Stone Grey / M",
        quantity: 1,
        price: 220
      },
      {
        id: "var_navy_trouser",
        product: {
          id: "mock_trouser",
          handle: "tailored-cargo-trouser",
          title: "Tailored Cargo Trouser",
          price: 185,
          description: "Navy Cargo Trouser.",
          featuredImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHutMvK7OFzydG64gJyEaF4xmgwdVoOuYP7oAMVvS19DP-b5_lhmrLelLN1GtPmdmGR-YwQ7PPYLl2D5LmMTmWHcqK-xgeDrrZjfMgcYT7LRG7isq4SrRF8KyxVpVPcYqkWQNlL1OJn2bkOO4vcVZY1Rhjvm2GpcoTNF1GfbYnorLv4RcIq2tC5lq40HiOPF5Ryv06SeSypJHuL7uU0ZucHploiTZuA1S3YZPEpboqsbW3UxiiR17GqhYJbCDJFpSnAoiW6enEz0A",
          images: [],
          options: [],
          variants: [],
          tags: []
        },
        variantTitle: "Performance Navy / 32",
        quantity: 1,
        price: 185
      }
    ];
    setCartItems(mockItems);
  }, []);

  const addToCart = (product: Product, variantId: string, quantity = 1) => {
    setCartItems((prevItems) => {
      // Find variant details
      const variant = product.variants.find(v => v.id === variantId);
      const variantTitle = variant ? variant.title : "One Size";
      const price = variant ? variant.price : product.price;

      const existingIndex = prevItems.findIndex(item => item.id === variantId);
      if (existingIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingIndex].quantity += quantity;
        return newItems;
      }
      
      return [...prevItems, {
        id: variantId || product.id,
        product,
        variantTitle,
        quantity,
        price
      }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map(item => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 450; // LE 450 or $450

  return (
    <CartContext.Provider value={{
      isCartOpen,
      setIsCartOpen,
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartCount,
      cartSubtotal,
      freeShippingThreshold
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
