import {
  Categories,
  CheckboxFiltersGroup,
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  SortPopup,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" className="font-extrabold" size="lg" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация*/}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={"Пиццы"}
                items={[
                  {
                    id: 1,
                    name: "Сырный цыпленок",
                    price: 210,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    items: [{ price: 210 }],
                  },
                  {
                    id: 2,
                    name: "Сырный цыпленок",
                    price: 210,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    items: [{ price: 210 }],
                  },
                  {
                    id: 3,
                    name: "Сырный цыпленок",
                    price: 210,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    items: [{ price: 210 }],
                  },
                  {
                    id: 4,
                    name: "Сырный цыпленок",
                    price: 210,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    items: [{ price: 210 }],
                  },
                  {
                    id: 5,
                    name: "Сырный цыпленок",
                    price: 210,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    items: [{ price: 210 }],
                  },
                  {
                    id: 6,
                    name: "Сырный цыпленок",
                    price: 210,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    items: [{ price: 210 }],
                  },
                  {
                    id: 7,
                    name: "Сырный цыпленок",
                    price: 210,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    items: [{ price: 210 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title={"Комбо"}
                items={[
                  {
                    id: 1,
                    name: "Сырный цыпленок",
                    price: 210,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    items: [{ price: 210 }],
                  },
                  {
                    id: 2,
                    name: "Сырный цыпленок",
                    price: 210,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    items: [{ price: 210 }],
                  },
                  {
                    id: 3,
                    name: "Сырный цыпленок",
                    price: 210,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    items: [{ price: 210 }],
                  },
                  {
                    id: 4,
                    name: "Сырный цыпленок",
                    price: 210,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    items: [{ price: 210 }],
                  },
                  {
                    id: 5,
                    name: "Сырный цыпленок",
                    price: 210,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    items: [{ price: 210 }],
                  },
                  {
                    id: 6,
                    name: "Сырный цыпленок",
                    price: 210,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    items: [{ price: 210 }],
                  },
                  {
                    id: 7,
                    name: "Сырный цыпленок",
                    price: 210,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    items: [{ price: 210 }],
                  },
                ]}
                categoryId={2}
              />
              ;
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
