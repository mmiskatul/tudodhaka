export type Dish = {
  name: string;
  description: string;
  price: string;
  tags?: Array<"chef" | "spicy" | "veg">;
};

export type Section = { title: string; items: Dish[] };
export type MenuKey = "food" | "cafe" | "drinks";

export const menus: Record<MenuKey, { label: string; note: string; sections: Section[] }> =
  {
    food: {
      label: "Food Menu",
      note: "Served 5:00 PM – 11:30 PM",
      sections: [
        {
          title: "Starters",
          items: [
            {
              name: "Gỏi Cuốn Rice Paper Rolls",
              description:
                "Prawn, mint, rice vermicelli, roasted peanut nước chấm.",
              price: "৳ 640",
            },
            {
              name: "Steamed Pork & Chive Dumplings",
              description: "Hand-pleated, black vinegar and chilli oil.",
              price: "৳ 720",
              tags: ["chef"],
            },
            {
              name: "Salt & Pepper Prawns",
              description: "Sichuan pepper, curry leaf, bird's eye chilli.",
              price: "৳ 890",
              tags: ["spicy"],
            },
            {
              name: "Charred Broccolini",
              description: "White miso, toasted sesame, crisp shallot.",
              price: "৳ 560",
              tags: ["veg"],
            },
          ],
        },
        {
          title: "Mains",
          items: [
            {
              name: "Lemongrass Grilled Beef",
              description:
                "Charcoal-grilled short rib, green mango salad, tamarind glaze.",
              price: "৳ 1,450",
              tags: ["chef"],
            },
            {
              name: "Thai Green Curry",
              description: "Chicken or tofu, apple aubergine, sweet basil, coconut.",
              price: "৳ 1,090",
              tags: ["spicy"],
            },
            {
              name: "Cantonese Steamed Barramundi",
              description: "Ginger, spring onion, light soy, coriander oil.",
              price: "৳ 1,380",
            },
            {
              name: "Clay Pot Aubergine",
              description: "Sichuan bean paste, garlic, spring onion.",
              price: "৳ 890",
              tags: ["veg"],
            },
          ],
        },
        {
          title: "Noodles & Rice",
          items: [
            {
              name: "Phở Bò",
              description: "Twelve-hour beef broth, rice noodles, herb basket.",
              price: "৳ 960",
              tags: ["chef"],
            },
            {
              name: "Pad Thai",
              description: "Prawn, tamarind, palm sugar, chive, crushed peanut.",
              price: "৳ 980",
            },
            {
              name: "Nasi Goreng",
              description: "Fried rice, sambal, fried egg, prawn crackers.",
              price: "৳ 890",
              tags: ["spicy"],
            },
            {
              name: "Garlic Jasmine Rice",
              description: "Steamed jasmine, confit garlic, spring onion.",
              price: "৳ 320",
              tags: ["veg"],
            },
          ],
        },
        {
          title: "Desserts",
          items: [
            {
              name: "Pandan Coconut Panna Cotta",
              description: "Alphonso mango, palm sugar caramel.",
              price: "৳ 540",
              tags: ["veg"],
            },
            {
              name: "Black Sesame Ice Cream",
              description: "Roasted rice crumb, honeycomb.",
              price: "৳ 480",
              tags: ["veg"],
            },
            {
              name: "Vietnamese Coffee Crème",
              description: "Condensed milk custard, robusta espresso.",
              price: "৳ 520",
            },
          ],
        },
      ],
    },
    cafe: {
      label: "Cafe Menu",
      note: "Served 12:00 PM – 10:30 PM",
      sections: [
        {
          title: "All Day Plates",
          items: [
            {
              name: "Banh Mi",
              description: "Lemongrass chicken, pâté, pickled daikon, coriander.",
              price: "৳ 620",
            },
            {
              name: "Chilli Oil Egg Toast",
              description: "Sourdough, soft egg, scallion, crisp chilli.",
              price: "৳ 540",
              tags: ["spicy", "veg"],
            },
            {
              name: "Sesame Chicken Salad",
              description: "Napa cabbage, herbs, roasted sesame dressing.",
              price: "৳ 780",
            },
            {
              name: "Congee of the Day",
              description: "Slow rice porridge, ginger, fried shallot.",
              price: "৳ 560",
            },
          ],
        },
        {
          title: "Coffee & Tea",
          items: [
            {
              name: "Cà Phê Sữa Đá",
              description: "Vietnamese drip, condensed milk, ice.",
              price: "৳ 380",
              tags: ["chef"],
            },
            { name: "Flat White", description: "House blend, silky milk.", price: "৳ 340" },
            {
              name: "Jasmine Silver Needle",
              description: "Loose leaf, brewed by the pot.",
              price: "৳ 420",
            },
            {
              name: "Matcha Latte",
              description: "Ceremonial grade, oat or full cream.",
              price: "৳ 450",
            },
          ],
        },
        {
          title: "Bakery",
          items: [
            {
              name: "Pandan Kaya Bun",
              description: "Warm brioche, coconut jam, salted butter.",
              price: "৳ 320",
              tags: ["veg"],
            },
            {
              name: "Miso Banana Bread",
              description: "Toasted, brown butter.",
              price: "৳ 340",
              tags: ["veg"],
            },
          ],
        },
      ],
    },
    drinks: {
      label: "Drink Menu",
      note: "Served from 5:00 PM",
      sections: [
        {
          title: "Signature Pours",
          items: [
            {
              name: "Tụ'do Highball",
              description: "Barrel-aged whisky, yuzu, soda, cedar smoke.",
              price: "৳ 1,150",
              tags: ["chef"],
            },
            {
              name: "Lemongrass Collins",
              description: "Gin, lemongrass cordial, kaffir lime.",
              price: "৳ 1,050",
            },
            {
              name: "Tamarind Sour",
              description: "Dark rum, tamarind, palm sugar, egg white.",
              price: "৳ 1,090",
            },
          ],
        },
        {
          title: "Zero Proof",
          items: [
            {
              name: "Garden Cooler",
              description: "Cucumber, shiso, green apple, tonic.",
              price: "৳ 620",
              tags: ["veg"],
            },
            {
              name: "Salted Calamansi Soda",
              description: "Calamansi, sea salt, cane sugar.",
              price: "৳ 560",
              tags: ["veg"],
            },
            {
              name: "Cold Brew Tonic",
              description: "House cold brew, tonic, orange oil.",
              price: "৳ 590",
            },
          ],
        },
        {
          title: "Wine & Beer",
          items: [
            { name: "House White / Red", description: "By the glass.", price: "৳ 950" },
            { name: "Sparkling", description: "Brut, by the glass.", price: "৳ 1,100" },
            { name: "Craft Lager", description: "Chilled, 330ml.", price: "৳ 690" },
          ],
        },
      ],
    },
  };
