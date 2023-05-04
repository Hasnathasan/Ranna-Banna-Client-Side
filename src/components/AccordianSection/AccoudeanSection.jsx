import { Accordion } from "flowbite-react";
import React from "react";

const AccordianSection = () => {
  
  return (
    <div className="my-28">
      <h1 className="text-xl md:text-4xl my-7 font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-red-500 text-center">
        About our Indian Cuisine
      </h1>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            What are some popular dishes in Indian cuisine?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              There are many popular dishes in Indian cuisine, ranging from
              vegetarian curries like chana masala (chickpea curry) and saag
              paneer (spinach and cheese curry) to meat dishes like butter
              chicken and lamb vindaloo. Other popular Indian dishes include
              biryani (a rice dish), naan bread, samosas (deep-fried pastry
              filled with spiced potatoes or meat), and various types of dal
              (lentil stew).
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What are some common spices used in Indian cuisine?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Indian cuisine is known for its bold and complex flavors, which
              often come from the use of spices. Common spices used in Indian
              cooking include cumin, coriander, turmeric, ginger, garlic, chili
              powder, garam masala (a spice blend), and mustard seeds. Spices
              are often toasted or fried in oil before being added to dishes,
              which helps to release their flavor and aroma.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is Indian food typically spicy?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Indian food can be quite spicy, but not all dishes are equally
              hot. The level of spiciness in a dish can vary depending on the
              region of India it comes from and the personal preferences of the
              cook. Many Indian dishes include chili peppers or chili powder,
              which can add heat to the dish, but other ingredients like coconut
              milk or yogurt can help to balance out the spice. If you're
              sensitive to spice, it's always a good idea to ask your server or
              host about the level of heat in a dish before ordering or eating
              it.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What are some popular vegetarian dishes in Indian cuisine?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              India has a large vegetarian population, and as a result, there
              are many delicious vegetarian dishes in Indian cuisine. Some
              popular vegetarian options include palak paneer (spinach and
              cheese curry), baingan bharta (roasted eggplant curry), aloo gobi
              (potato and cauliflower curry), and dosa (a fermented rice and
              lentil crepe typically served with chutneys and sambar).
              Vegetarian dishes can be just as flavorful and satisfying as their
              meat-based counterparts.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What are some popular street foods in India?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Indian street food is famous for its bold flavors and unique
              combinations of ingredients. Some popular street foods in India
              include chaat (a savory snack made with fried dough, potatoes,
              chutney, and spices), vada pav (a deep-fried potato patty served
              on a bun with chutney), and pani puri (a crispy hollow shell
              filled with spiced water and other ingredients). Street food can
              be a great way to try a variety of flavors and textures without
              committing to a full meal.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What is the difference between North Indian and South Indian
            cuisine?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              North Indian cuisine tends to be richer and creamier than South
              Indian cuisine, which is typically lighter and more coconut-based.
              North Indian dishes often use ingredients like cream, ghee
              (clarified butter), and paneer (a type of cheese), while South
              Indian dishes might feature more lentils, rice, and coconut milk.
              The flavors and spices used in North and South Indian dishes can
              also differ, with North Indian dishes sometimes being spicier and
              more aromatic, while South Indian dishes might have a more sour or
              tangy flavor profile.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default AccordianSection;
