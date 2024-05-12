"use client"
import {HomePage} from "@/ui/templates/HomePage/HomePage";
import {ModalProductProvider} from "@/providers/ModalProvider";
import {CartProvider} from "@/providers/CartProvider";

export default function Home() {
  return (
      <>
          <ModalProductProvider>
              <CartProvider>
                <HomePage/>
              </CartProvider>
          </ModalProductProvider>
      </>


  );
}
